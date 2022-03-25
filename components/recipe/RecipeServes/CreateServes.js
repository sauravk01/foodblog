import { IconButton, TextField, Button, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { ACTIONS } from "../../../store/recipe/recipeActions";
import { RecipeContext } from "../../../store/recipe/recipeGlobalState";
import { postData } from "../../../utils/fetchData";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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
      dispatch({ type: ACTIONS.RServes, payload: { ...res.data } });
    }
    router.push(`/create/recipe/${rTitle._id}`);
  };

  return (
    <>
      {/* <div>RecipeServes</div> */}
      <form onSubmit={handleSubmit}>
        <TextField
          variant={"standard"}
          label={"Number of Serving"}
          type="number"
          value={serveNum}
          onChange={(e) => setServeNum(e.target.value)}
        />

        <Stack mt={1}>
          {prepTimes.map((prepTime, index) => (
            <Stack key={index} direction={"row"}>
              <TextField
                variant={"standard"}
                label={"Time for Prepration"}
                type="number"
                name="time"
                value={prepTime.time}
                onChange={(e) => handlePrepChange(e, index)}
              />
              <TextField
                variant={"standard"}
                label={"Title"}
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
          ))}
        </Stack>
        <IconButton
          variant={"outlined"}
          size={"small"}
          onClick={(e) => addFields(e, "prepTime")}
        >
          <AddCircleOutlineIcon />
        </IconButton>
        <Stack mt={1}>Ingredients:</Stack>
        {ingredients.map((ingredient, index) => {
          return (
            <Stack key={index} direction={"row"}>
              <TextField
                label={"Quantity"}
                type="number"
                name="quantity"
                variant={"standard"}
                value={ingredient.quantity}
                onChange={(e) => handleIngredientChange(e, index)}
              />
              <TextField
                label={"Unit"}
                type="text"
                name="unit"
                variant={"standard"}
                value={ingredient.unit}
                onChange={(e) => handleIngredientChange(e, index)}
              />
              <TextField
                sx={{ width: "600px" }}
                label={"Description"}
                type="text"
                name="description"
                variant={"standard"}
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
            </Stack>
          );
        })}
        <IconButton
          variant={"outlined"}
          size={"small"}
          onClick={(e) => addFields(e, "ingredient")}
        >
          <AddCircleOutlineIcon />
        </IconButton>

        <Stack>
          <TextField
            label={"Special Equipments"}
            type="text"
            variant={"standard"}
            value={specialEquipment}
            onChange={(e) => setSpecialEquipment(e.target.value)}
          />
        </Stack>

        <Button variant={"contained"} type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default CreateServes;
