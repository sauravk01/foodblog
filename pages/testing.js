import { getData } from "../utils/fetchData";

const testing = ({ recipe }) => {
  console.log("recipe", recipe[0]);
  return <></>;
};

export default testing;
export async function getServerSideProps(context) {
  let recipes = await getData("recipe");

  // let recipe = recipes.data.filter((recipe) => recipe._id == query);

  return {
    props: {
      recipe: recipes.data,
    },
  };
}
