import { getSession, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import {
  deleteData,
  getData,
  postData,
  putData,
} from "../../../utils/fetchData";
const index = ({ categories }) => {
  const initialValues = {
    category: "",
    title: "",
  };
  const [values, setValues] = useState(initialValues);
  const [subs, setSubs] = useState([]);
  const [id, setId] = useState("");
  const { category, title } = values;
  const { data: session } = useSession();

  //loading subcategories data
  useEffect(async () => {
    let res = await getData("sub-category");
    setSubs(res.subCategories);
  }, [values]);
  console.log(subs);

  //inputs collecting
  const handleChangeInput = async (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  console.log("values", values);

  //submitting sub category
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    let res;
    if (id) {
      res = await putData(`sub-category/${id}`, values, session.accessToken);
      console.log("res", res);
    } else {
      res = await postData("sub-category", values, session.accessToken);
      console.log("res", res);
    }

    setValues(initialValues);
  };

  //changing sub-category title
  const handleEdit = async (s) => {
    // clearing all data
    setValues({ subcategory: "", title: "" });
    setId("");

    //entering values
    setValues({ subcategory: s.category, title: s.title });
    setId(s._id);
  };

  //deleting sub-category
  const handleDelete = async (s) => {
    let id = s._id;
    console.log(id);
    let res = await deleteData(`sub-category/${id}`, session.accessToken);
    console.log(res);
    setValues(initialValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category">Select category:</label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={handleChangeInput}
          >
            <option value="all">All Products</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="sub">Enter the sub-category name:</label>
          <input
            type="text"
            id="sub"
            name="title"
            value={title}
            onChange={handleChangeInput}
          />
        </div>
        <button type="submit">{id ? "Update" : "Create"}</button>
      </form>
      {!subs ? (
        <h4>Loading...</h4>
      ) : (
        subs.map((s) => (
          <div key={s._id}>
            {s.title}
            <button onClick={(e) => handleEdit(s)}>Edit</button>
            <button onClick={(e) => handleDelete(s)}>Delete</button>
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
  let res = await getData("category");
  let categories = res.categories;
  return {
    props: {
      categories,
    },
  };
}
