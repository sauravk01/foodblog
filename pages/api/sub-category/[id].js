import dbConnect from "../../../utils/connectDB";
import sessionProvider from "../../../utils/sessionProvider";
import {
  checkCategory,
  checkTitle,
} from "../../../utils/validation/apiValidation";
import { error } from "../../../utils/error/errorAPI";
import SubCategory from "../../../model/sub-category";

dbConnect();

export default async (req, res) => {
  switch (req.method) {
    case "PUT":
      await editSubCategory(req, res);
      break;
    case "DELETE":
      await deleteSubCategory(req, res);
      break;
  }
};

const editSubCategory = async (req, res) => {
  try {
    sessionProvider(req);
    const { title, category } = req.body;
    checkTitle(title);
    checkCategory(category);
    const updateSubCategory = await SubCategory.findByIdAndUpdate(
      req.query.id,
      {
        category,
        title,
      }
    );

    await updateSubCategory.save();

    res.json({
      msg: "sub-category updated",
      subCategory: {
        ...updateSubCategory._doc,
        title,
        category,
      },
    });
  } catch (err) {
    error(err, res);
  }
};

const deleteSubCategory = async (req, res) => {
  try {
    sessionProvider(req);
    const id = req.query.id;
    console.log(id);
    //find the product in that category and delete them all
    //code not written

    await SubCategory.findByIdAndDelete(id);
    return res.json({ msg: "success" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
