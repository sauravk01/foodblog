import { useContext, useEffect } from "react";
import { ACTIONS } from "../../../store/recipe/recipeActions";
import { RecipeContext } from "../../../store/recipe/recipeGlobalState";
import RInstruction from "./RInstruction";

const RInstructions = ({ instructions }) => {
  const { state, dispatch } = useContext(RecipeContext);
  const { rTitle, rDescriptions, rServes, rInstructions } = state;
  useEffect(() => {
    if (instructions) {
      dispatch({
        type: ACTIONS.RInstruction,
        payload: [...instructions],
      });
    }
  }, []);

  return (
    <>
      <div>RecipeInstructions</div>
      <hr />

      {rTitle._id && rInstructions ? (
        rInstructions.map((inst) => (
          <div key={inst._id}>
            <div>
              <label>Instructions:</label>
              {inst.instruction}
            </div>
            <div>
              <label>id:</label>
              {inst._id}
            </div>
          </div>
        ))
      ) : (
        <h5>No Instructions Yet</h5>
      )}
      <hr />
      {rServes ? <RInstruction /> : <h5>Please submit the serves first</h5>}
    </>
  );
};

export default RInstructions;
