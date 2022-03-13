import Multiselect from "multiselect-react-dropdown";
import { useSession } from "next-auth/react";
import React, { useContext } from "react";
import { useRef, useState } from "react";
import { ACTIONS } from "../../store/recipe/recipeActions";
import { RecipeContext } from "../../store/recipe/recipeGlobalState";
import { postData } from "../../utils/fetchData";
import {
  deleteImage,
  ImageUploadHandler,
} from "../../utils/imageHandler/imageUploadHandler";

const initialState = {
  title: "",
  subCategory: "",
  themeTitleRecipe: "",
};
const RecipeTitle = ({ subCategories }) => {
  const [recipeValues, setRecipeValues] = useState(initialState);
  const { state, dispatch } = useContext(RecipeContext);
  const { rTitle } = state;
  const { data: session } = useSession();
  const [images, setImages] = useState([]);
  const { title, themeTitleRecipe } = recipeValues;
  const [selectedSubs, setSelectedSubs] = useState([]);
  const ref = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeValues({ ...recipeValues, [name]: value });
  };
  const createRecipeItemTitle = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // console.log("button clicked", recipeValues);
    for (const file of images) {
      formData.append(`image`, file);
    }
    formData.append("title", recipeValues.title);
    formData.append("themeTitleRecipe", recipeValues.themeTitleRecipe);
    //for subsId everyitems must be inserted in a key word
    let subIds = selectedSubs.map((s) => s._id);
    for (const sub of subIds) {
      formData.append("subCategories", sub);
    }
    // console.log(formData.getAll(subCategories));
    let res = await postData("recipe", formData, session.accessToken);

    console.log("res", res);
    if (res.msg == "success") {
      dispatch({
        type: ACTIONS.RTitle,
        payload: { ...res.newRecipe, selectedSubs: selectedSubs },
      });
    }
  };

  ///multiselect sections////
  const onSelect = (selectSubs) => {
    setSelectedSubs(selectSubs);
  };

  const onRemove = (selectSubs) => {
    setSelectedSubs(selectSubs);
  };

  return (
    <>
      <form onSubmit={createRecipeItemTitle}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={rTitle.title ? rTitle.title : title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subCategory">sub-categories:</label>
          <Multiselect
            displayValue="title"
            onRemove={onRemove}
            onSelect={onSelect}
            options={[...subCategories]}
            selectedValues={rTitle.selectedSubs}
          />
        </div>
        <div>
          <label>Reciep theme title:</label>
          <input
            id="themeTitleRecipe"
            type="text"
            name="themeTitleRecipe"
            value={
              rTitle.themeTitleRecipe
                ? rTitle.themeTitleRecipe
                : themeTitleRecipe
            }
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            onChange={(e) => ImageUploadHandler(e, { images, setImages })}
            ref={ref}
          />
        </div>
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
        <button type="submit" disabled={rTitle.title ? true : false}>
          Create recipe title
        </button>
      </form>
    </>
  );
};

export default RecipeTitle;
