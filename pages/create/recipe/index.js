import { getSession } from "next-auth/react";
import { useState } from "react/cjs/react.development";
import RecipeDescription from "../../../components/recipe/RecipeDescription";
import RecipeServes from "../../../components/recipe/RecipeServes";
import RecipeTitle from "../../../components/recipe/title";
import { RecipeProvider } from "../../../store/recipe/recipeGlobalState";
import { getData } from "../../../utils/fetchData";

const initialState = {
  title: "",
  subCategory: "",
  themeTitleRecipe: "",
};
const index = ({ subCategories }) => {
  const [recipeValues, setRecipeValues] = useState(initialState);

  return (
    <>
      <RecipeProvider>
        <div>Recipe Page</div>
        <RecipeTitle
          recipeValues={recipeValues}
          setRecipeValues={setRecipeValues}
          subCategories={subCategories}
        />
        <hr />
        <RecipeDescription />
        <hr />
        <RecipeServes />
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
  // console.log("sub-category", subCategories);
  return {
    props: {
      session,
      subCategories: subCategories.subCategories,
    },
  };
}
