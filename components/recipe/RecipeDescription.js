import { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { RecipeContext } from "../../store/recipe/recipeGlobalState";
import RDescripton from "./RDescripton";

const RecipeDescription = () => {
  const { state } = useContext(RecipeContext);
  const { rTitle, rDescriptions } = state;
  // console.log("desc", state.rDescriptions);
  const [show, setShow] = useState(false);
  console.log("load", show);
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
      {rTitle ? (
        <button onClick={() => setShow(!show)}>Show Editor</button>
      ) : (
        <h5>Please submit the title first</h5>
      )}
      {show === true && <RDescripton />}
    </>
  );
};
export default RecipeDescription;
