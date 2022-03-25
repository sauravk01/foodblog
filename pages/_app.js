import { SessionProvider, useSession } from "next-auth/react";
import NavBar from "../components/Navbar/NavBar";
import { RecipeProvider } from "../store/recipe/recipeGlobalState";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // console.log("session", session);

  return (
    <SessionProvider session={session}>
      <RecipeProvider>
        <NavBar />
        <Component {...pageProps} />
      </RecipeProvider>
    </SessionProvider>
  );
}

export default MyApp;
