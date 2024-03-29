import { ACTIONS } from "./recipeActions";

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.RTitle:
      return {
        ...state,
        rTitle: action.payload,
      };
      break;
    case ACTIONS.RDescription:
      return {
        ...state,
        rDescriptions: action.payload,
      };
      break;
    case ACTIONS.RServes:
      return {
        ...state,
        rServes: action.payload,
      };
      break;
    case ACTIONS.RInstruction:
      return {
        ...state,
        rInstructions: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
