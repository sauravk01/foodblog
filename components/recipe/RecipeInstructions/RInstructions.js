import { useContext } from "react";
import { RecipeContext } from "../../../store/recipe/recipeGlobalState";
import RInstruction from "./RInstruction";

const RInstructions = () => {
  const { state, dispatch } = useContext(RecipeContext);
  const { rTitle, rDescriptions, rServes } = state;
  // console.log("desc", state.rDescriptions);

  return (
    <>
      <div>RecipeInstructions</div>
      <hr />

      {rTitle._id && rDescriptions ? (
        rDescriptions.map((rDes) => (
          <div key={rDes._id}>
            <div>
              <label>Description:</label>
              {rDes.description}
            </div>
            <div>
              <label>RecipeId:</label>
              {rDes.recipeId}
            </div>
          </div>
        ))
      ) : (
        <h5>No Descriptions Yet</h5>
      )}
      <hr />
      {rServes ? <RInstruction /> : <h5>Please submit the serves first</h5>}
    </>
  );
};

export default RInstructions;
