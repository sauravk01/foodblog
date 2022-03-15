import { getSession } from "next-auth/react";
import { useState } from "react/cjs/react.development";
import RecipeDescription from "../../../components/recipe/RecipeDescription";
import RInstructions from "../../../components/recipe/RecipeInstructions/RInstructions";
import RecipeServes from "../../../components/recipe/RecipeServes/RecipeServes";
import RecipeTitle from "../../../components/recipe/title/index";
import { RecipeProvider } from "../../../store/recipe/recipeGlobalState";
import { getData } from "../../../utils/fetchData";

const index = ({ SubCategories }) => {
  return (
    <>
      <RecipeProvider>
        <div>Recipe Page</div>
        <RecipeTitle SubCategories={SubCategories} />
        <hr />
        <RecipeDescription />
        <hr />
        <RecipeServes />
        <hr />
        <RInstructions />
        <hr />
      </RecipeProvider>
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
  console.log("sub-category", subCategories);
  return {
    props: {
      session,
      SubCategories: subCategories.data,
    },
  };
}
