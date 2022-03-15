import { RecipeContext } from "../../../store/recipe/recipeGlobalState";
import { useContext, useEffect, useState } from "react";
import UpdateServes from "./UpdateServes";
import CreateServes from "./CreateServes";
import { ACTIONS } from "../../../store/recipe/recipeActions";

const RecipeServes = ({ serves }) => {
  const { state, dispatch } = useContext(RecipeContext);
  const { rServes } = state;
  useEffect(() => {
    if (serves) {
      dispatch({
        type: ACTIONS.RServes,
        payload: { ...serves },
      });
      // console.log("Rserves", { ...serves });
    }
  }, []);

  return (
    <>
      {!rServes._id && <CreateServes />}
      <hr /> {rServes._id && <UpdateServes />}
    </>
  );
};

export default RecipeServes;
