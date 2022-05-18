import { Paper, Stack } from "@mui/material";
import React from "react";
import { getData } from "../../utils/fetchData";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LayOutItems from "../../components/LayOutItems";
import { useSession } from "next-auth/react";

export default function subs({ data }) {
  const { data: session } = useSession();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matches2 = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Paper elevation={0} sx={{ textAlign: "center", width: "100vw" }}>
        <Stack sx={{ marginX: "auto" }}>
          <LayOutItems
            items={data}
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
  console.log("context", context);
  let data;
  console.log("query", context.query.all);

  if (context.resolvedUrl == "/sub-category") {
    const allData = await getData("sub-category");
    data = allData.data;
  }
  // if (context.query.all[1]) {
  //   const id = context.query.all[0];
  //   console.log("id", context.query);
  //   const recipes = await getData("recipe");
  //   data = await recipes.data.filter(({ subCategories }) =>
  //     subCategories.some((sId) => sId === id)
  //   );
  // }

  // let subCategories = await getData("sub-category");

  //only given subs

  return {
    props: {
      // subCategories: subCategories.data,
      data: data,
    },
  };
}
