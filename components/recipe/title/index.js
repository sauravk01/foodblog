import Multiselect from "multiselect-react-dropdown";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { ACTIONS } from "../../../store/recipe/recipeActions";
import {
  createRecipeDescriptionName,
  createRecipeInstructionName,
  createRecipeServesName,
  createRecipeStorageName,
  RecipeContext,
} from "../../../store/recipe/recipeGlobalState";
import { postData, putData } from "../../../utils/fetchData";
import {
  deleteImage,
  ImageUploadHandler,
} from "../../../utils/imageHandler/imageUploadHandler";
import { clearingLocalStorage } from "../../../utils/localStorage/recipeGS";

const initialState = {
  title: "",
  subCategory: "",
  themeTitleRecipe: "",
};
const RecipeTitle = ({ SubCategories, recipe }) => {
  const router = useRouter();

  const [recipeValues, setRecipeValues] = useState(initialState);
  const { state, dispatch } = useContext(RecipeContext);
  const { rTitle } = state;
  const [id, setId] = useState("");
  const { data: session } = useSession();
  const [images, setImages] = useState([]);
  const { title, themeTitleRecipe } = recipeValues;
  const [selectedSubs, setSelectedSubs] = useState([]);
  const ref = useRef();

  useEffect(() => {
    if (recipe) {
      // console.log("recipe", recipe);
      dispatch({
        type: ACTIONS.RTitle,
        payload: { ...recipe },
      });
      let result = SubCategories.filter((o1) =>
        recipe.subCategories.some((o2) => o1._id === o2)
      );
      setSelectedSubs([...result]);
      setId(recipe._id);
    }
  }, []);
  // console.log("recipe", recipeValues);
  // console.log("id", id);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeValues({ ...recipeValues, [name]: value });
  };

  const createRecipeItemTitle = async (e) => {
    e.preventDefault();

    setId(rTitle._id || null);
    const formData = new FormData();

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
    let res;
    if (id) {
      res = await putData(`recipe/${id}`, formData, session.accessToken);
      // if ((res = "success")) {
      //   res = await putData(
      //     `recipe/${id - "success"}`,
      //     formData,
      //     session.accessToken
      //   );
      // } else {
      //   console.log("success");
      // }
    }
    if (!id) {
      res = await postData("recipe", formData, session.accessToken);
    }

    console.log("res", res);
    if (res.msg == "success created") {
      dispatch({
        type: ACTIONS.RTitle,
        payload: { ...res.newRecipe, selectedSubs: selectedSubs },
      });
      setId(res.newRecipe._id);
    }
    if (res.msg == "success") {
      clearingLocalStorage(createRecipeStorageName);
      clearingLocalStorage(createRecipeDescriptionName);
      clearingLocalStorage(createRecipeServesName);
      clearingLocalStorage(createRecipeInstructionName);
      router.reload(window.location.pathname);
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
            value={title || rTitle.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subCategory">sub-categories:</label>
          <Multiselect
            displayValue="title"
            onRemove={onRemove}
            onSelect={onSelect}
            options={[...SubCategories]}
            selectedValues={selectedSubs || rTitle.selectedSubs}
          />
        </div>
        <div>
          <label>Reciep theme title:</label>
          <input
            id="themeTitleRecipe"
            type="text"
            name="themeTitleRecipe"
            value={themeTitleRecipe || rTitle.themeTitleRecipe}
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
        <button type="submit">
          {rTitle.title ? "Update recipe title" : "Create recipe title"}
        </button>
      </form>
    </>
  );
};

export default RecipeTitle;
