import { Paper, Stack } from "@mui/material";
import React from "react";
import { getData, postData } from "../../utils/fetchData";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LayOutItems from "../../components/LayOutItems";
import { useSession } from "next-auth/react";

export default function subs({ recipes }) {
  const { data: session } = useSession();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matches2 = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Paper elevation={0} sx={{ textAlign: "center", width: "100vw" }}>
        <Stack sx={{ marginX: "auto" }}>
          <LayOutItems
            items={recipes}
            matches={matches}
            matches2={matches2}
            editLink={session ? "create/recipe" : "recipe"}
            deleteLink={session ? "recipe" : null}
            title={"All Recipes"}
            linkPage={"recipe"}
          />
        </Stack>
      </Paper>
    </>
  );
}
export async function getServerSideProps(context) {
  const id = context.query.all[1];
  // console.log("id", context.query.all[1]);
  // let subCategories = await getData("sub-category");
  const recipes = await getData(`recipe/filterSearch/${id}`);
  //only given subs

  return {
    props: {
      // subCategories: subCategories.data,
      recipes: recipes.data,
    },
  };
}
