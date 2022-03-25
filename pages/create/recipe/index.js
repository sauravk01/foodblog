import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import RecipeDescription from "../../../components/recipe/RecipeDescription";
import RInstructions from "../../../components/recipe/RecipeInstructions/RInstructions";
import RecipeServes from "../../../components/recipe/RecipeServes/RecipeServes";
import RecipeTitle from "../../../components/recipe/title/index";
import { getData } from "../../../utils/fetchData";
import { handleClearLocalRecipeStorage } from "../../../utils/localStorage/recipeGS";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import NavBar from "../../../components/Navbar/NavBar";

const index = ({ SubCategories }) => {
  const router = useRouter();
  console.log(router);
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Typography variant={"h4"} sx={{ textAlign: "center" }}>
        Recipe Page
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
          <RecipeTitle SubCategories={SubCategories} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel4")}
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
          <RecipeDescription />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
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
          <RecipeServes />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          aria-controls="panel4d-content"
          id="panel4d-header"
          expandIcon={<ExpandMoreIcon />}
          sx={{ backgroundColor: "slategrey" }}
        >
          <Typography>Recipe Instructions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RInstructions />
        </AccordionDetails>
      </Accordion>

      <Button
        onClick={() => {
          handleClearLocalRecipeStorage();
          router.reload();
        }}
      >
        Done
      </Button>
    </>
  );
};

export default index;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: `http://localhost:3000`,
        permanent: false,
      },
    };
  }
  let subCategories = await getData("sub-category");
  // console.log("sub-category", subCategories);
  return {
    props: {
      session,
      SubCategories: subCategories.data,
    },
  };
}
