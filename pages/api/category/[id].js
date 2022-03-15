import dbConnect from "../../../utils/connectDB";
import Category from "../../../model/category";
import sessionProvider from "../../../utils/sessionProvider";
import { error } from "../../../utils/error/errorAPI";
import { APIDeleteItem } from "../../../utils/API/APIDeleteItem";

dbConnect();

export default async (req, res) => {
  switch (req.method) {
    case "PUT":
      await updateCategory(req, res);
      break;
    case "DELETE":
      await deleteCategory(req, res);
      break;
  }
};

const updateCategory = async (req, res) => {
  try {
    sessionProvider(req);
    let id = req.query.id;
    let title = req.body.title;

    const categoryUpdate = await Category.findByIdAndUpdate(id, { title });

    res.json({
      msg: "Category updated",
      category: {
        ...categoryUpdate._doc,
        title,
      },
    });
  } catch (err) {
    error(err, res);
  }
};

const deleteCategory = async (req, res) => {
  sessionProvider(req);
  await APIDeleteItem(req, Category, res);
};
