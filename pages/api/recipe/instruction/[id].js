import dbConnect from "../../../../utils/connectDB";
import sessionProvider from "../../../../utils/sessionProvider";
import { error } from "../../../../utils/error/errorAPI";
import nc from "next-connect";
import _ from "lodash";
import upload from "../../../../utils/multer";

import RecipeInstruction from "../../../../model/recipe/instruction";
import {
  ncValidators,
  postNEdit,
} from "../../../../utils/API/withNextConnect/functions";
import { APIDeleteItem } from "../../../../utils/API/APIDeleteItem";
const staticResourceUrl = process.env.STATIC_RESOURCE_URL;
dbConnect();

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc(ncValidators)
  .use(upload.single("image"))
  .put(async (req, res) => {
    try {
      await postNEdit(req, res, RecipeInstruction);
    } catch (err) {
      error(err, res);
    }
  })
  .delete(async (req, res) => {
    console.log(req.query);
    await APIDeleteItem(req, RecipeInstruction, res);
  });

export default handler;
