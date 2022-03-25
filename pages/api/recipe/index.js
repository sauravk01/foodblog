import dbConnect from "../../../utils/connectDB";
import { error } from "../../../utils/error/errorAPI";
import Recipe from "../../../model/recipe";
import nc from "next-connect";
import _ from "lodash";
import upload from "../../../utils/multer";
import { recipeTitleValidation } from "../../../utils/validation/recipeValidation";
import {
  getRecipes,
  ncValidators,
  postNEdit,
} from "../../../utils/API/withNextConnect/functions";

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
      recipeTitleValidation(req, res);
      await postNEdit(req, res, Recipe);
    } catch (err) {
      error(err, res);
    }
  })
  .get(async (req, res) => {
    try {
      getRecipes(req, res, Recipe);
    } catch (err) {
      error(err, res);
    }
  });

export default handler;
