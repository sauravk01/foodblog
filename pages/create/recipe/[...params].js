import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getData } from "../../../utils/fetchData";
import { RecipeProvider } from "../../../store/recipe/recipeGlobalState";
import RecipeDescription from "../../../components/recipe/RecipeDescription";
import RInstructions from "../../../components/recipe/RecipeInstructions/RInstructions";
import RecipeServes from "../../../components/recipe/RecipeServes/RecipeServes";
import RecipeTitle from "../../../components/recipe/title";
import { handleClearLocalRecipeStorage } from "../../../utils/localStorage/recipeGS";

const RecipeAll = ({ recipe, subCategories }) => {
  const router = useRouter();
  const { params } = router.query;
  const { descriptions, instructions, serves } = recipe;
  console.log("recipes", recipe);

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Edit Page</h3>
      <RecipeProvider>
        <div>Recipe Page</div>
        <RecipeTitle recipe={recipe} SubCategories={subCategories} />
        <hr />
        <RecipeDescription descriptions={descriptions} />
        <hr />
        <RecipeServes serves={serves[0]} />
        <hr />
        <RInstructions instructions={instructions} />
        <hr />
        <button onClick={handleClearLocalRecipeStorage}>Done</button>
      </RecipeProvider>
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
