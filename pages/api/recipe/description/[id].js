import dbConnect from "../../../../utils/connectDB";
import sessionProvider from "../../../../utils/sessionProvider";
import { error } from "../../../../utils/error/errorAPI";
import nc from "next-connect";
import _ from "lodash";
import upload from "../../../../utils/multer";
import { recipeDescriptionValidation } from "../../../../utils/validation/recipeValidation";
import RecipeDescription from "../../../../model/recipe/description";
import { getData } from "../../../../utils/API/getData";
import { APIDeleteItem } from "../../../../utils/API/APIDeleteItem";
import {
  ncValidators,
  postNEdit,
} from "../../../../utils/API/withNextConnect/functions";
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
    console.log(req.query);
    await APIDeleteItem(req, RecipeDescription, res);
  })
  .put(async (req, res) => {
    const recipeDescription = JSON.parse(JSON.stringify(req.body));
    const blocks = JSON.parse(recipeDescription.description);
    console.log("req->>>", recipeDescription);
    console.log("req-query->>>", req.query.id);
    const description = {
      time: recipeDescription.time,
      blocks: blocks,
      version: recipeDescription.version,
    };
    try {
      recipeDescriptionValidation(req, res);

      await postNEdit(req, res, RecipeDescription, description);
    } catch (err) {
      error(err, res);
    }
  })
  .get(async (req, res) => {
    let info = { type: "id", id: req._id };
    getData(info, RecipeDescription, res);
  });

export default handler;
