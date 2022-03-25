import dbConnect from "../../../utils/connectDB";
import Category from "../../../model/category";
import sessionProvider from "../../../utils/sessionProvider";
import { checkTitle } from "../../../utils/validation/apiValidation";
import { error } from "../../../utils/error/errorAPI";
import { postNEdit } from "../../../utils/API/withNextConnect/functions";

dbConnect();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getCategories(req, res);
      break;
    case "POST":
      await createCategory(req, res);
      break;
  }
};

const createCategory = async (req, res) => {
  try {
    await sessionProvider(req);
    checkTitle(req.body.title);
    await postNEdit(req, res, Category);
  } catch (err) {
    error(err, res);
  }
};

const getCategories = async (req, res) => {
  try {
    // Category.find();
    // Implementing $lookup for category collection and finding the results
    const data = await Category.aggregate([
      {
        $lookup: {
          from: "subcategories",
          localField: "_id",
          foreignField: "category",
          as: "subCategories",
        },
      },
    ]);
    console.log("res category", data);

    res.json({ data });
  } catch (err) {
    error(err, res);
  }
};
