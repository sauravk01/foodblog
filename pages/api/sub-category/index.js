import dbConnect from "../../../utils/connectDB";
import {
  checkCategory,
  checkTitle,
} from "../../../utils/validation/apiValidation";
import { error } from "../../../utils/error/errorAPI";
import SubCategory from "../../../model/sub-category";
import { APIData } from "../../../utils/API/getData";
import {
  ncValidators,
  postNEdit,
} from "../../../utils/API/withNextConnect/functions";
import nc from "next-connect";
import upload from "../../../utils/multer";

dbConnect();

const handler = nc(ncValidators)
  .use(upload.single("image"))
  .post(async (req, res) => {
    try {
      checkTitle(req.body.title);
      checkCategory(req.body.category);
      await postNEdit(req, res, SubCategory);
    } catch (err) {
      error(err, res);
    }
  })
  .get(async (req, res) => {
    try {
      await APIData("all", SubCategory, res);
    } catch (err) {
      error(err, res);
    }
  });

export default handler;
