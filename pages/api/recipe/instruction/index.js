import dbConnect from "../../../../utils/connectDB";
import sessionProvider from "../../../../utils/sessionProvider";
import { error } from "../../../../utils/error/errorAPI";
import nc from "next-connect";
import _ from "lodash";
import upload from "../../../../utils/multer";

import { recipeInstructionValidation } from "../../../../utils/validation/recipeValidation";
import RecipeInstruction from "../../../../model/recipe/instruction";
import {
  ncValidators,
  postNEdit,
} from "../../../../utils/API/withNextConnect/functions";
dbConnect();

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc(ncValidators)
  .use(upload.single("image"))
  .post(async (req, res) => {
    try {
      recipeInstructionValidation(req, res);
      await postNEdit(req, res, RecipeInstruction);
    } catch (err) {
      error(err, res);
    }
  });

export default handler;
