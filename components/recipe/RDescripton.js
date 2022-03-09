import { useSession } from "next-auth/react";
import { useRef, useState, useContext } from "react";
import { ACTIONS } from "../../store/recipe/recipeActions";
import { RecipeContext } from "../../store/recipe/recipeGlobalState";
import { postData } from "../../utils/fetchData";
import {
  deleteImage,
  ImageUploadHandler,
} from "../../utils/imageHandler/imageUploadHandler";

const RDescripton = () => {
  const { state, dispatch } = useContext(RecipeContext);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [orderNumber, setOrderNumber] = useState(0);
  const { data: session } = useSession();
  const ref = useRef();
  const { rTitle, rDescriptions } = state;
  // console.log("state", state);
  const createRecipeDescription = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (const file of images) {
      formData.append(`image`, file);
    }
    formData.append("description", description);
    //recipe title from the state or localStorage
    formData.append("recipeId", rTitle._id);
    if (!orderNumber === 0) {
      formData.append("orderNumber", orderNumber);
    }

    let res = await postData(
      "recipe/description",
      formData,
      session.accessToken
    );

    console.log("res", res);
    if (res.msg == "success") {
      dispatch({
        type: ACTIONS.RDescription,
        payload: [...rDescriptions, res.newDescription],
      });
    }
  };

  return (
    <>
      <form onSubmit={createRecipeDescription}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Order Number:</label>
          <input
            type="number"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            disabled={images.length === 1}
            onChange={(e) => ImageUploadHandler(e, { images, setImages })}
            ref={ref}
          />
        </div>
        <button type="submit">Submit</button>
        <div>
          {images &&
            images.map((img, index) => (
              <div key={index}>
                <img
                  key={index}
                  style={{ width: "100px" }}
                  src={img.url ? img.url : URL.createObjectURL(img)}
                  alt=""
                />

                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteImage(index, { images, setImages })}
                >
                  X
                </span>
              </div>
            ))}
        </div>
      </form>
    </>
  );
};

export default RDescripton;
