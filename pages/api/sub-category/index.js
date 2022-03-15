import dbConnect from "../../../utils/connectDB";
import sessionProvider from "../../../utils/sessionProvider";
import {
  checkCategory,
  checkTitle,
} from "../../../utils/validation/apiValidation";
import { error } from "../../../utils/error/errorAPI";
import SubCategory from "../../../model/sub-category";
import { APIData } from "../../../utils/API/getData";

dbConnect();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getSubCategories(req, res);
      break;
    case "POST":
      await createSubCategory(req, res);
      break;
  }
};

const createSubCategory = async (req, res) => {
  try {
    sessionProvider(req);
    const { title, category } = req.body;
    checkTitle(title);
    checkCategory(category);
    const newSubCategory = new SubCategory({ category, title });
    await newSubCategory.save();
    res.json({
      msg: "Success! created a new sub-category.",
      newSubCategory,
    });
  } catch (err) {
    error(err, res);
  }
};

const getSubCategories = async (req, res) => {
  try {
    await APIData("all", SubCategory, res);
  } catch (err) {
    error(err, res);
  }
};
