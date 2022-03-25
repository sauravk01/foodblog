import { getSession, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  deleteData,
  getData,
  postData,
  putData,
} from "../../../utils/fetchData";

const index = ({ category }) => {
  console.log("category", category);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [categories, setCategories] = useState([...category]);
  const { data: session } = useSession();

  useEffect(async () => {
    let res = await getData("category", session.accessToken);
    setCategories(res.data);
  }, [title]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;
    if (id) {
      res = await putData(`category/${id}`, { title }, session.accessToken);
    } else {
      res = await postData("category", { title }, session.token);
    }
    setTitle("");
    setId("");
  };

  const handleDeleteCategory = async (c) => {
    let id = c._id;
    let res = await deleteData(`category/${id}`, session.accessToken);
    console.log(res);
    setTitle("...");
    setTitle("");
  };

  const handleEditCategory = (category) => {
    setId(category._id);
    setTitle(category.title);
  };

  return (
    <>
      <div>Create Category Page</div>
      <form onSubmit={handleSubmit}>
        <label>Category:</label>
        <input
          type="text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">{id ? "Update" : "Create"}</button>
      </form>
      {!categories ? (
        <h4>No Categories Found</h4>
      ) : (
        categories.map((c) => (
          <div key={c._id}>
            {c.title}

            <button onClick={(e) => handleDeleteCategory(c)}>delete</button>
            <button onClick={(e) => handleEditCategory(c)}>edit</button>
          </div>
        ))
      )}
    </>
  );
};

export default index;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: `http://localhost:3000`,
        permanent: false,
      },
    };
  }
  let category = await getData("category");
  // console.log("category", category.categories);
  return {
    props: {
      session,
      category: category.data,
    },
  };
}
