import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ACTIONS } from "../../../store/recipe/recipeActions";
import {
  createRecipeDescriptionName,
  createRecipeInstructionName,
  createRecipeServesName,
  createRecipeStorageName,
  RecipeContext,
} from "../../../store/recipe/recipeGlobalState";
import { postData, putData } from "../../../utils/fetchData";
import { clearingLocalStorage } from "../../../utils/localStorage/recipeGS";

const UpdateServes = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(RecipeContext);
  const { rTitle, rServes } = state;
  const {
    _id,
    numberOfServing,
    timeForPrepration,
    ingredients,
    specialEquipments,
  } = rServes;
  const [serveNum, setServeNum] = useState(0);
  const [prepTimes, setPrepTimes] = useState([{ time: 0, title: "" }]);
  const [listIngredients, setListIngredients] = useState([
    { quantity: 0, unit: "", description: "" },
  ]);
  const [id, setId] = useState("");
  const [specialEquipment, setSpecialEquipment] = useState("");
  // console.log("res--->>>", rServes);·

  useEffect(() => {
    // if (rServes != {}) {
    loadSavedData();
    // }
  }, []);
  const loadSavedData = () => {
    setServeNum(numberOfServing);
    setPrepTimes(timeForPrepration);
    setListIngredients(ingredients);
    setSpecialEquipment(specialEquipments);
    setId(_id);
  };

  const handlePrepChange = (e, index) => {
    if (e.target.name === "title" || "time") {
      let data = [...prepTimes];

      data[index][e.target.name] = e.target.value;
      setPrepTimes(data);
    }
  };

  const handleIngredientChange = (e, index) => {
    if (e.target.name === "quantity" || "description" || "unit") {
      let data = [...ingredients];
      data[index][e.target.name] = e.target.value;
      setListIngredients(data);
    }
  };

  const addFields = (e, state) => {
    e.preventDefault();
    let object;
    if (state == "prepTime") {
      object = { time: 0, title: "" };
      setPrepTimes([...prepTimes, object]);
    }
    if (state == "ingredient") {
      object = { quantity: 0, unit: "", description: "" };
      setListIngredients([...ingredients, object]);
    }
  };

  const removeField = (index, state) => {
    if (state === "prepTime") {
      let data = [...prepTimes];
      data.splice(index, 1);
      setPrepTimes(data);
    }
    if (state === "ingredient") {
      let data = [...ingredients];
      data.splice(index, 1);
      setListIngredients(data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await putData(`recipe/serves/${id}`, {
      numberOfServing: serveNum,
      timeForPrepration: [...prepTimes],
      ingredients: [...listIngredients],
      specialEquipments: specialEquipment,
      recipeId: rTitle._id,
    });
    if (res.msg == "success.") {
      console.log("res--->>>", res);
      dispatch({ type: ACTIONS.RServes, payload: { ...res.updateServe } });
    }
    clearingLocalStorage(createRecipeStorageName);
    clearingLocalStorage(createRecipeDescriptionName);
    clearingLocalStorage(createRecipeServesName);
    clearingLocalStorage(createRecipeInstructionName);
    router.reload(window.location.pathname);
  };
  return (
    <>
      <div>UpdateServes</div>
      <button onClick={loadSavedData}>Load Data</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Number of Serving:</label>
          <input
            type="number"
            value={serveNum}
            onChange={(e) => setServeNum(e.target.value)}
          />
        </div>
        <div>
          <label>Time for Prepration:</label>
          {prepTimes.map((prepTime, index) => {
            return (
              <div key={index}>
                <label>Time:</label>
                <input
                  type="number"
                  name="time"
                  value={prepTime.time}
                  onChange={(e) => handlePrepChange(e, index)}
                />
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={prepTime.title}
                  onChange={(e) => handlePrepChange(e, index)}
                />
                <span
                  style={{ cursor: "pointer", marginLeft: "5px" }}
                  onClick={() => removeField(index, "prepTime")}
                >
                  X
                </span>
              </div>
            );
          })}

          <button onClick={(e) => addFields(e, "prepTime")}>Add More</button>
        </div>
        <div>
          <label>Ingredients:</label>
          {listIngredients.map((ingredient, index) => {
            return (
              <div key={index}>
                <label>Quantity:</label>
                <input
                  type="number"
                  name="quantity"
                  value={ingredient.quantity}
                  onChange={(e) => handleIngredientChange(e, index)}
                />
                <label>Unit:</label>
                <input
                  type="text"
                  name="unit"
                  value={ingredient.unit}
                  onChange={(e) => handleIngredientChange(e, index)}
                />
                <label>Description:</label>
                <input
                  type="text"
                  name="description"
                  value={ingredient.description}
                  onChange={(e) => handleIngredientChange(e, index)}
                />
                <span
                  style={{ cursor: "pointer", marginLeft: "5px" }}
                  onClick={() => removeField(index, "ingredient")}
                >
                  X
                </span>
              </div>
            );
          })}

          <button onClick={(e) => addFields(e, "ingredient")}>Add More</button>
        </div>
        <div>
          <label>Special Equipments:</label>
          <input
            type="text"
            value={specialEquipment}
            onChange={(e) => setSpecialEquipment(e.target.value)}
          />
        </div>
        <button type="submit">Update Serve</button>
      </form>
    </>
  );
};

export default UpdateServes;
