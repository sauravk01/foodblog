import dbConnect from "../../../utils/connectDB";
import Category from "../../../model/category";
import sessionProvider from "../../../utils/sessionProvider";
import { error } from "../../../utils/error/errorAPI";

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
  try {
    const id = req.query.id;
    //find the product in that Category and delete them all
    //code not written

    await Category.findByIdAndDelete(id);
    return res.json({ msg: "success" });
  } catch (err) {
    error(err, res);
  }
};
