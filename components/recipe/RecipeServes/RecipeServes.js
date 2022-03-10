import { RecipeContext } from "../../../store/recipe/recipeGlobalState";
import { useContext, useState } from "react";
import UpdateServes from "./UpdateServes";
import CreateServes from "./CreateServes";

const RecipeServes = () => {
  const { state } = useContext(RecipeContext);
  const { rServes } = state;

  return (
    <>
      {!rServes._id && <CreateServes />}
      <hr /> {rServes._id && <UpdateServes />}
    </>
  );
};

export default RecipeServes;
