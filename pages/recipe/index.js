import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { getData } from "../../utils/fetchData";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LayOutItems from "../../components/LayOutItems";
import { useSession } from "next-auth/react";

export default function recipes({ recipes, subCategories }) {
  const { data: session } = useSession();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matches2 = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Paper elevation={0} sx={{ textAlign: "center", width: "100vw" }}>
        <Stack sx={{ marginX: "auto" }}>
          <LayOutItems
            items={subCategories}
            matches={matches}
            matches2={matches2}
            editLink={session && "create/sub-category"}
            deleteLink={session ? "sub-category" : null}
            title={"Recipes by Sub-Category"}
            linkPage={"sub-category"}
          />
          <LayOutItems
            items={recipes}
            matches={matches}
            matches2={matches2}
            editLink={session && "create/recipe"}
            deleteLink={session ? "recipe" : null}
            title={"All Recipes"}
            linkPage={"recipe"}
          />
        </Stack>
      </Paper>
    </>
  );
}
export async function getServerSideProps() {
  let recipes = await getData("recipe");
  let subCategories = await getData("sub-category");
  // let recipe = recipes.data.filter((recipe) => recipe._id == query);
  // console.log("subs", subCategories);
  return {
    props: {
      recipes: recipes.data,
      subCategories: subCategories.data,
    },
  };
}
