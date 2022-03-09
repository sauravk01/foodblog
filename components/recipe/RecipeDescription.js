import { useContext } from "react";
import { RecipeContext } from "../../store/recipe/recipeGlobalState";
import RDescripton from "./RDescripton";

const RecipeDescription = () => {
  const { state } = useContext(RecipeContext);
  const { rTitle, rDescriptions } = state;
  console.log("desc", state.rDescriptions);

  return (
    <>
      <div>RecipeDescriptions</div>
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
      {rTitle ? <RDescripton /> : <h5>Please submit the title first</h5>}
    </>
  );
};
export default RecipeDescription;
