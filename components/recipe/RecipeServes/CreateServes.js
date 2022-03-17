import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { ACTIONS } from "../../../store/recipe/recipeActions";
import { RecipeContext } from "../../../store/recipe/recipeGlobalState";
import { postData } from "../../../utils/fetchData";

const CreateServes = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(RecipeContext);
  const { rTitle, rServes } = state;
  const [serveNum, setServeNum] = useState(0);
  const [prepTimes, setPrepTimes] = useState([{ time: 0, title: "" }]);
  const [ingredients, setIngredients] = useState([
    { quantity: 0, unit: "", description: "" },
  ]);
  const [specialEquipment, setSpecialEquipment] = useState("");
  // console.log("router", router);

  const handlePrepChange = (e, index) => {
    if (e.target.name === "title" || "time") {
      let data = [...prepTimes];

      data[index][e.target.name] = e.target.value;
      setPrepTimes(data);
    }
  };
  // console.log("prepTime", ...prepTimes);

  const handleIngredientChange = (e, index) => {
    if (e.target.name === "quantity" || "description" || "unit") {
      console.log(ingredients);

      let data = [...ingredients];
      data[index][e.target.name] = e.target.value;
      setIngredients(data);
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
      setIngredients([...ingredients, object]);
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
      setIngredients(data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await postData("recipe/serves", {
      numberOfServing: serveNum,
      timeForPrepration: [...prepTimes],
      ingredients: [...ingredients],
      specialEquipments: specialEquipment,
      recipeId: rTitle._id,
    });
    console.log("res", res);
    if (res.msg == "Success! created a new serve.") {
      dispatch({ type: ACTIONS.RServes, payload: { ...res.newServe } });
    }
    router.push(`/create/recipe/${rTitle._id}`);
  };

  return (
    <>
      <div>RecipeServes</div>
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
          {prepTimes.map((prepTime, index) => (
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
          ))}

          <button onClick={(e) => addFields(e, "prepTime")}>Add More</button>
        </div>
        <div>
          <label>Ingredients:</label>
          {ingredients.map((ingredient, index) => {
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
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateServes;
