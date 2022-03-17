import Link from "next/link";
import { useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import {
  createRecipeDescriptionName,
  RecipeContext,
} from "../../store/recipe/recipeGlobalState";
import { deleteData } from "../../utils/fetchData";
import RDescripton from "./RDescripton";
import { useSession } from "next-auth/react";
import { clearingLocalStorage } from "../../utils/localStorage/recipeGS";
import { ACTIONS } from "../../store/recipe/recipeActions";
import { useRouter } from "next/router";

const RecipeDescription = ({ descriptions }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(RecipeContext);
  const { rTitle, rDescriptions } = state;
  const [show, setShow] = useState(false);
  const { data: session } = useSession();
  useEffect(() => {
    if (descriptions) {
      console.log("description", ...descriptions);

      dispatch({
        type: ACTIONS.RDescription,
        payload: [...descriptions],
      });
    }
  }, []);

  const handleDeleteDescription = async (des, session) => {
    let id = des._id;

    let res = await deleteData(`recipe/description/${id}`, session.accessToken);
    console.log(res);
    clearingLocalStorage(createRecipeDescriptionName);
  };

  return (
    <>
      <div>RecipeDescriptions</div>
      <hr />

      {rTitle._id && rDescriptions.length >= 1 ? (
        rDescriptions.map((rDes) => (
          <div key={rDes._id}>
            <div>
              <label>DescriptionId:</label>
              {rDes._id}
              {router.pathname !== `/create/recipe/[...params]` ? (
                <>
                  <Link href={`recipe/${rTitle._id}`}>
                    <button
                      style={{
                        marginLeft: "5px",
                        cursor: "pointer",
                        backgroundColor: "skyblue",
                      }}
                    >
                      <a>Edit</a>
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <span>
                    <h5>Editing on progress</h5>
                  </span>
                  <button
                    style={{
                      marginLeft: "5px",
                      cursor: "pointer",
                      backgroundColor: "skyblue",
                    }}
                    onClick={(e) => handleDeleteDescription(rDes, session)}
                  >
                    delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))
      ) : (
        <h5>No Descriptions Yet</h5>
      )}
      <hr />
      {rTitle ? (
        <button onClick={() => setShow(!show)}>Show Editor</button>
      ) : (
        <h5>Please submit the title first</h5>
      )}
      {show === true && <RDescripton />}
    </>
  );
};
export default RecipeDescription;
