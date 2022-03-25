import { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { ACTIONS } from "../../../store/recipe/recipeActions";
import { RecipeContext } from "../../../store/recipe/recipeGlobalState";
import RInstruction from "./RInstruction";

const RInstructions = ({ instructions }) => {
  const { state, dispatch } = useContext(RecipeContext);
  const { rTitle, rDescriptions, rServes, rInstructions } = state;
  const [instruction, setInstruction] = useState("");
  const [images, setImages] = useState([]);
  const [orderNumber, setOrderNumber] = useState(0);
  const [id, setId] = useState("");

  useEffect(() => {
    if (instructions) {
      dispatch({
        type: ACTIONS.RInstruction,
        payload: [...instructions],
      });
      console.log("instructions", instructions);
    }
  }, []);

  const handleEdit = (instruction) => {
    setInstruction(instruction.instruction);
    setOrderNumber(instruction.orderNumber || 0);
    setId(instruction._id);
  };

  const handleDelete = (instruction) => {
    console.log(instruction);
  };

  return (
    <>
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
            <button onClick={(e) => handleEdit(inst)}>Edit</button>
            <button onClick={(e) => handleDelete(inst)}>delete</button>
          </div>
        ))
      ) : (
        <h5>No Instructions Yet</h5>
      )}
      <hr />
      {rServes ? (
        <RInstruction
          instruction={instruction}
          setInstruction={setInstruction}
          images={images}
          setImages={setImages}
          orderNumber={orderNumber}
          setOrderNumber={setOrderNumber}
          id={id}
          setId={setId}
        />
      ) : (
        <h5>Please submit the serves first</h5>
      )}
    </>
  );
};

export default RInstructions;
