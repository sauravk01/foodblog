import { Button, IconButton, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRef, useState, useContext } from "react";
import { ACTIONS } from "../../../store/recipe/recipeActions";
import { RecipeContext } from "../../../store/recipe/recipeGlobalState";
import { postData, putData } from "../../../utils/fetchData";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import {
  deleteImage,
  ImageUploadHandler,
} from "../../../utils/imageHandler/imageUploadHandler";

const RInstruction = (props) => {
  const { state, dispatch } = useContext(RecipeContext);
  const {
    instruction,
    setInstruction,
    images,
    setImages,
    orderNumber,
    setOrderNumber,
    id,
    setId,
  } = props;
  const { data: session } = useSession();
  const router = useRouter();
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

    let res;
    if (id) {
      res = await putData(
        `recipe/instruction/${id}`,
        formData,
        session.accessToken
      );
      router.reload();
      // console.log("res put", res);
    }
    if (!id) {
      res = await postData("recipe/instruction", formData, session.accessToken);
      if (res.msg == "success  created") {
        dispatch({
          type: ACTIONS.RInstruction,
          payload: [...rInstructions, res.data],
        });
      }
    }

    console.log("res", res);
  };

  return (
    <>
      <form onSubmit={createRecipeInstruction}>
        <TextField
          variant={"standard"}
          label={"Instructions"}
          type="text"
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
        />

        <TextField
          variant={"standard"}
          label={"Order Number"}
          type="number"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
        />

        <TextField
          variant={"standard"}
          label={"Image"}
          type="file"
          disabled={images && images.length === 1}
          onChange={(e) => ImageUploadHandler(e, { images, setImages })}
          ref={ref}
        />

        <Button variant={"contained"} type="submit">
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
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  sx={{ marginLeft: "5px" }}
                  component="span"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteImage(index, { images, setImages })}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </div>
            ))}
        </div>
      </form>
    </>
  );
};

export default RInstruction;
