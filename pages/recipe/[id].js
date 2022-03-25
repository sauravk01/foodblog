import { getData } from "../../utils/fetchData";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";
import {
  Grid,
  Paper,
  Box,
  Stack,
  Button,
  Typography,
  ButtonGroup,
  Divider,
  Input,
  TextField,
  IconButton,
  Icon,
} from "@mui/material";
import Editor from "../../components/editor/EditorJS";
import { useEffect, useState } from "react";
import Fraction from "../../components/Fraction";
const testing = ({ recipe }) => {
  console.log("recipe", recipe);
  const {
    title,
    subCategories,
    themeTitleRecipe,
    descriptions,
    instructions,
    serves,
    image,
  } = recipe;
  const [count, setCount] = useState(serves[0].numberOfServing || 0);
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState([]);
  useEffect(() => {
    if (serves[0]) {
      setQuantity(serves[0].ingredients.map((item) => item.quantity));
    }
  }, []);
  let conversionRate = count / serves[0].numberOfServing;

  const timeArray = serves[0].timeForPrepration.map((item) => item.time);

  const totalTimeRequiredToPrepare = timeArray.reduce(
    (currentTotalTime, time) => currentTotalTime + time,
    0
  );
  const eachTaskOfTimeArray = serves[0].timeForPrepration.map((item) => (
    <Stack key={item._id}>
      <Typography variant="h5" display="block">
        {item.title}
      </Typography>
      <Typography variant="overline" sx={{ textAlign: "center" }} gutterBottom>
        `{item.time} min`
      </Typography>
    </Stack>
  ));

  const listAllIngredients = serves[0].ingredients.map((ing, index) => (
    <Fraction
      count={count}
      ing={ing}
      serves={serves}
      quantity={quantity}
      index={index}
    />
  ));
  // useEffect(() => newValue()[count]);
  // let result;
  // const newValue = () =>
  //   (result = serves[0].timeForPrepration.forEach(
  //     (ing) => (ing.fractionValue = getFraction(conversionRate * ing.quantity))
  //   ));

  // console.log("result", result);

  const recipeTitle = (
    <Stack justifyContent="center" alignItems="center">
      <Typography variant="h3">{title}</Typography>
      <Typography variant="subtitle1">{themeTitleRecipe}</Typography>
    </Stack>
  );

  const subCategoriesList = (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {subCategories.map((sub, index) => (
        <Button size="small" variant="outlined" key={index}>
          {sub}
        </Button>
      ))}
    </Stack>
  );

  const EditorSection = (
    <Stack>
      <img src={image} alt={title} />

      <Editor data={descriptions[0].description} readonly={true} />
    </Stack>
  );
  const servesSection = (
    <Box>
      <Stack justifyContent="center" alignItems="center" spacing={2}>
        {/* <input type="number" /> */}
        <Stack>{recipeTitle}</Stack>
        <Stack>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </Stack>

        <Typography variant="h5" gutterBottom component="div">
          serves no.
        </Typography>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          {eachTaskOfTimeArray}
          <Stack>
            <Typography variant="h5" display="block">
              Total Time
            </Typography>
            <Typography
              variant="overline"
              sx={{ textAlign: "center" }}
              gutterBottom
            >
              `{totalTimeRequiredToPrepare} min`
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Typography variant="h5">Ingredients</Typography>
        <Stack direction="column">
          <ul>{listAllIngredients}</ul>
        </Stack>
      </Stack>
    </Box>
  );

  const listAllInstructions = instructions.map((inst) => (
    <>
      <Stack>
        <Typography variant="overline">
          <li>{inst.instruction}</li>
        </Typography>
        <img
          style={{ display: visible ? "none" : "block" }}
          src={inst.image}
          alt="unavailable"
        />
      </Stack>
    </>
  ));

  const instructionsSections = (
    <Stack>
      <Stack direction="row">
        <Typography variant="h5" gutterBottom>
          Instructions
        </Typography>
        {visible ? (
          <IconButton
            onClick={() => setVisible(!visible)}
            aria-label="camera"
            size="small"
          >
            <CameraAltIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => setVisible(!visible)}
            aria-label="no-camera"
            size="small"
          >
            <NoPhotographyIcon />
          </IconButton>
        )}
      </Stack>
      <Stack spacing={2}>
        <ol>{listAllInstructions}</ol>
      </Stack>
    </Stack>
  );
  console.log("descriptions[0]", serves);
  return (
    <Grid container spacing={2} sx={{ marginX: "auto", width: "100vw" }}>
      <Grid item xs={12} md={8}>
        <Stack sx={{ margin: "auto", padding: "5px", maxWidth: "800px" }}>
          <Box>
            {subCategoriesList}
            {recipeTitle}

            <Stack>{EditorSection}</Stack>
          </Box>
          {servesSection}
          <Box>{instructionsSections}</Box>
        </Stack>
      </Grid>
      <Grid item xs={12} md={4}>
        others
      </Grid>
    </Grid>
  );
};

export default testing;
export async function getServerSideProps(context) {
  let recipes = await getData("recipe");

  // let recipe = recipes.data.filter((recipe) => recipe._id == query);

  return {
    props: {
      recipe: recipes.data[recipes.data.length - 1],
    },
  };
}
