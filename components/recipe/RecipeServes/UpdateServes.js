import { Button, IconButton, Stack, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ACTIONS } from "../../../store/recipe/recipeActions";
import { RecipeContext } from "../../../store/recipe/recipeGlobalState";
import { putData } from "../../../utils/fetchData";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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
      dispatch({ type: ACTIONS.RServes, payload: { ...res.data } });
    }
    // clearingLocalStorage(createRecipeStorageName);
    // clearingLocalStorage(createRecipeDescriptionName);
    // clearingLocalStorage(createRecipeServesName);
    // clearingLocalStorage(createRecipeInstructionName);
    router.push(`/create/recipe/${rTitle._id}`);
  };
  return (
    <>
      <div>UpdateServes</div>
      <Button variant={"outlined"} size={"small"} onClick={loadSavedData}>
        Load Data
      </Button>
      <form onSubmit={handleSubmit}>
        <TextField
          label={"Number of Serving"}
          variant={"standard"}
          type="number"
          value={serveNum}
          onChange={(e) => setServeNum(e.target.value)}
        />

        <Stack>
          <label>Time for Prepration:</label>
          {prepTimes.map((prepTime, index) => {
            return (
              <Stack key={index}>
                <TextField
                  label={"Time"}
                  variant={"standard"}
                  type="number"
                  name="time"
                  value={prepTime.time}
                  onChange={(e) => handlePrepChange(e, index)}
                />
                <TextField
                  label={"Title"}
                  variant={"standard"}
                  type="text"
                  name="title"
                  value={prepTime.title}
                  onChange={(e) => handlePrepChange(e, index)}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  sx={{ marginLeft: "5px" }}
                  component="span"
                  onClick={() => removeField(index, "prepTime")}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </Stack>
            );
          })}

          <IconButton onClick={(e) => addFields(e, "prepTime")}>
            <AddCircleOutlineIcon />
          </IconButton>
        </Stack>
        <div>
          <label>Ingredients:</label>
          {listIngredients.map((ingredient, index) => {
            return (
              <div key={index}>
                <label>Quantity:</label>
                <TextField
                  label={"Quantity"}
                  type="number"
                  name="quantity"
                  value={ingredient.quantity}
                  onChange={(e) => handleIngredientChange(e, index)}
                />
                <label>Unit:</label>
                <TextField
                  label={"Unit"}
                  type="text"
                  name="unit"
                  value={ingredient.unit}
                  onChange={(e) => handleIngredientChange(e, index)}
                />
                <label>Description:</label>
                <TextField
                  label={"Description"}
                  type="text"
                  name="description"
                  value={ingredient.description}
                  onChange={(e) => handleIngredientChange(e, index)}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  sx={{ marginLeft: "5px" }}
                  component="span"
                  onClick={() => removeField(index, "ingredient")}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </div>
            );
          })}

          <IconButton onClick={(e) => addFields(e, "ingredient")}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <label>Special Equipments:</label>
          <TextField
            label={"Special Equipments"}
            type="text"
            value={specialEquipment}
            onChange={(e) => setSpecialEquipment(e.target.value)}
          />
        </div>
        <Button variant={"contained"} size={"small"} type="submit">
          Update Serve
        </Button>
      </form>
    </>
  );
};

export default UpdateServes;
