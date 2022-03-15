import { useSession } from "next-auth/react";
import { useRef, useState, useContext } from "react";
import { ACTIONS } from "../../../store/recipe/recipeActions";
import { RecipeContext } from "../../../store/recipe/recipeGlobalState";
import { postData } from "../../../utils/fetchData";
import {
  deleteImage,
  ImageUploadHandler,
} from "../../../utils/imageHandler/imageUploadHandler";

const RInstruction = () => {
  const { state, dispatch } = useContext(RecipeContext);
  const [instruction, setInstruction] = useState("");
  const [images, setImages] = useState([]);
  const [orderNumber, setOrderNumber] = useState(0);
  const { data: session } = useSession();
  const ref = useRef();
  const { rTitle, rInstructions } = state;
  // console.log("state", state);
  const createRecipeInstruction = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (const file of images) {
      formData.append(`image`, file);
    }
    formData.append("instruction", instruction);
    //recipe title from the state or localStorage
    formData.append("recipeId", rTitle._id);
    if (!orderNumber === 0) {
      formData.append("orderNumber", orderNumber);
    }

    let res = await postData(
      "recipe/instruction",
      formData,
      session.accessToken
    );

    console.log("res", res);
    if (res.msg == "success") {
      dispatch({
        type: ACTIONS.RInstruction,
        payload: [...rInstructions, res.newInstruction],
      });
    }
  };

  return (
    <>
      <form onSubmit={createRecipeInstruction}>
        <div>
          <label>Instructions:</label>
          <input
            type="text"
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
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

export default RInstruction;
