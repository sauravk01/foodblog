import dbConnect from "../../../utils/connectDB";
import sessionProvider from "../../../utils/sessionProvider";
import { error } from "../../../utils/error/errorAPI";
import Recipe from "../../../model/recipe";
import nc from "next-connect";
import _ from "lodash";
import upload from "../../../utils/multer";
import { recipeTitleValidation } from "../../../utils/validation/recipeValidation";
import { APIDeleteItem } from "../../../utils/API/APIDeleteItem";
import {
  getRecipes,
  ncValidators,
  postNEdit,
} from "../../../utils/API/withNextConnect/functions";
const staticResourceUrl = process.env.STATIC_RESOURCE_URL;
dbConnect();

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc(ncValidators)
  .use(upload.single("image"))
  .delete(async (req, res) => {
    // console.log("delete", req);
    sessionProvider(req);

    await APIDeleteItem(req, Recipe, res);
  })
  .put(async (req, res) => {
    try {
      recipeTitleValidation(req, res);

      const data = {
        title: req.body.title,
        themeTitleRecipe: req.body.themeTitleRecipe,
        subCategories: req.body.subCategories,
      };
      await postNEdit(req, res, Recipe, data);
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
