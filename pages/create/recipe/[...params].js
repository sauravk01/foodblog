import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getData } from "../../../utils/fetchData";
import { RecipeProvider } from "../../../store/recipe/recipeGlobalState";
import RecipeDescription from "../../../components/recipe/RecipeDescription";
import RInstructions from "../../../components/recipe/RecipeInstructions/RInstructions";
import RecipeServes from "../../../components/recipe/RecipeServes/RecipeServes";
import RecipeTitle from "../../../components/recipe/title";
import { handleClearLocalRecipeStorage } from "../../../utils/localStorage/recipeGS";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const RecipeAll = ({ recipe, subCategories }) => {
  const router = useRouter();
  const { params } = router.query;
  const { descriptions, instructions, serves } = recipe;
  console.log("recipes", recipe);

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Typography variant={"h4"} sx={{ textAlign: "center" }}>
        Edit Recipe Page
      </Typography>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          expandIcon={<ExpandMoreIcon />}
          sx={{ backgroundColor: "slategrey" }}
        >
          <Typography>Recipe Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RecipeTitle recipe={recipe} SubCategories={subCategories} />
        </AccordionDetails>
      </Accordion>
      <hr />
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          expandIcon={<ExpandMoreIcon />}
          sx={{ backgroundColor: "slategrey" }}
        >
          <Typography>Recipe Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RecipeDescription descriptions={descriptions} />
        </AccordionDetails>
      </Accordion>
      <hr />
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          expandIcon={<ExpandMoreIcon />}
          sx={{ backgroundColor: "slategrey" }}
        >
          <Typography>Recipe Serves</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RecipeServes serves={serves[0]} />
        </AccordionDetails>
      </Accordion>
      <hr />
      <Accordion
        expanded={expanded === "panel4"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel4")}
      >
        <AccordionSummary
          aria-controls="panel4d-content"
          id="panel1d-header"
          expandIcon={<ExpandMoreIcon />}
          sx={{ backgroundColor: "slategrey" }}
        >
          <Typography>Recipe Instructions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RInstructions instructions={instructions} />
        </AccordionDetails>
      </Accordion>
      <hr />
      <Button
        onClick={() => {
          handleClearLocalRecipeStorage();
          router.replace("recipe");
        }}
      >
        Done
      </Button>
    </>
  );
};

export default RecipeAll;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let query = context.query.params[0];
  if (!session) {
    return {
      redirect: {
        destination: `http://localhost:3000`,
        permanent: false,
      },
    };
  }

  let recipes = await getData(`recipe/${query}`);

  let recipe = recipes.data.filter((recipe) => recipe._id == query);
  let subCategories = await getData("sub-category");

  return {
    props: {
      session,
      recipe: recipe[0],
      subCategories: subCategories.data,
    },
  };
}
