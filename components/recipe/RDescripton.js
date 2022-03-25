import { Button, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useRef, useState, useContext } from "react";
import { ACTIONS } from "../../store/recipe/recipeActions";
import {
  createRecipeDescriptionName,
  RecipeContext,
} from "../../store/recipe/recipeGlobalState";
import { deleteData, postData, putData } from "../../utils/fetchData";

import {
  deleteImage,
  ImageUploadHandler,
} from "../../utils/imageHandler/imageUploadHandler";
import { clearingLocalStorage } from "../../utils/localStorage/recipeGS";
import Editor from "../editor/EditorJS";

const RDescripton = () => {
  const router = useRouter();

  const { state, dispatch } = useContext(RecipeContext);
  const [description, setDescription] = useState(null);
  const [images, setImages] = useState([]);
  const [orderNumber, setOrderNumber] = useState(0);
  const [id, setId] = useState("");
  const { data: session } = useSession();
  const ref = useRef();
  const { rTitle, rDescriptions } = state;

  // const handleDeleteDescription = async (description, session) => {
  //   let id = description._id;
  //   await deleteData(`recipe/description/${id}`, session.accessToken);
  // };
  useEffect(() => {
    if (rDescriptions[0]) setId(rDescriptions[0]._id || "");
  }, []);

  // console.log("description.blocks", description.blocks);
  // console.log("session", session.accessToken);
  const createRecipeDescription = async (e) => {
    e.preventDefault();

    let descriptions = JSON.stringify(description.blocks);
    const formData = new FormData();

    for (const file of images) {
      formData.append(`image`, file);
    }

    formData.append("description", descriptions);

    formData.append("time", description.time);
    formData.append("version", description.version);

    //recipe title from the state or localStorage
    formData.append("recipeId", rTitle._id);
    if (!orderNumber === 0) {
      formData.append("orderNumber", orderNumber);
    }
    let res;
    if (id) {
      res = await putData(
        `recipe/description/${id}`,
        formData,
        session.accessToken
      );
    }
    if (!id) {
      res = await postData("recipe/description", formData, session.accessToken);
    }

    dispatch({
      type: ACTIONS.RDescription,
      payload: [
        {
          ...res.data,
        },
      ],
    });

    router.reload(window.location.pathname);
  };

  return (
    <>
      <form onSubmit={createRecipeDescription}>
        <h3 style={{ textAlign: "center" }}>Descriptions</h3>
        <div>
          <Editor
            data={
              rDescriptions.length >= 1 ? rDescriptions[0].description : null
            }
            setState={setDescription}
            readonly={false}
          />
        </div>
        <div>
          <TextField
            label={"Order Number"}
            type="number"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            variant={"standard"}
          />
        </div>
        <div>
          <TextField
            label={"Image"}
            type="file"
            disabled={images.length === 1}
            onChange={(e) => ImageUploadHandler(e, { images, setImages })}
            ref={ref}
            variant={"standard"}
          />
        </div>
        <Button variant={"contained"} type="submit" disabled={!description}>
          Submit
        </Button>
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
