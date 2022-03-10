import { createContext, useEffect, useReducer } from "react";
import {
  gettingLocalStorage,
  settingLocalStorage,
} from "../../utils/localStorage/recipeGS";
import { ACTIONS } from "./recipeActions";
import reducers from "./recipeReducer";
export const createRecipeStorageName = "createRecipeStorageName";
export const createRecipeDescriptionName = "createRecipeDescriptionName";
export const createRecipeServesName = "createRecipeServesName";
export const createRecipeInstructionName = "createRecipeInstructionName";
export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const initialState = {
    rTitle: {},
    rDescriptions: [],
    rServes: {},
    rInstructions: [],
  };
  const [state, dispatch] = useReducer(reducers, initialState);
  // console.log("state", state);
  const { rTitle, rDescriptions, rServes, rInstructions } = state;

  useEffect(() => {
    gettingLocalStorage(createRecipeStorageName, {
      dispatch,
      action: ACTIONS.RTitle,
    });
    gettingLocalStorage(createRecipeDescriptionName, {
      dispatch,
      action: ACTIONS.RDescription,
    });
    gettingLocalStorage(createRecipeServesName, {
      dispatch,
      action: ACTIONS.RServes,
    });
    gettingLocalStorage(createRecipeInstructionName, {
      dispatch,
      action: ACTIONS.RInstruction,
    });
  }, []);

  useEffect(() => {
    settingLocalStorage(createRecipeStorageName, rTitle);
    settingLocalStorage(createRecipeDescriptionName, rDescriptions);
    settingLocalStorage(createRecipeServesName, rServes);
    settingLocalStorage(createRecipeInstructionName, rInstructions);
  }, [rTitle, rDescriptions, rServes, rInstructions]);

  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};
