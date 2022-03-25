import dbConnect from "../../../utils/connectDB";
import sessionProvider from "../../../utils/sessionProvider";
import { error } from "../../../utils/error/errorAPI";
import SubCategory from "../../../model/sub-category";
import { APIDeleteItem } from "../../../utils/API/APIDeleteItem";
import {
  ncValidators,
  postNEdit,
} from "../../../utils/API/withNextConnect/functions";
import nc from "next-connect";
import upload from "../../../utils/multer";

dbConnect();

const handler = nc(ncValidators)
  .use(upload.single("image"))
  .put(async (req, res) => {
    try {
      recipeInstructionValidation(req, res);
      await postNEdit(req, res, RecipeInstruction);
    } catch (err) {
      error(err, res);
    }
  })
  .delete(async (req, res) => {
    await APIDeleteItem(req, SubCategory, res);
  });

export default handler;
