import dbConnect from "../../../utils/connectDB";
import Category from "../../../model/category";
import sessionProvider from "../../../utils/sessionProvider";
import { checkTitle } from "../../../utils/validation/apiValidation";
import { error } from "../../../utils/error/errorAPI";

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
    const { title } = req.body;
    checkTitle(title);
    const newCategory = new Category({ title });
    await newCategory.save();
    res.json({
      msg: "Success! created a new category.",
      newCategory,
    });
  } catch (err) {
    error(err, res);
  }
};

const getCategories = async (req, res) => {
  try {
    // Category.find();
    // Implementing $lookup for category collection and finding the results
    const categories = await Category.aggregate([
      {
        $lookup: {
          from: "subcategories",
          localField: "_id",
          foreignField: "category",
          as: "subCategories",
        },
      },
    ]);
    // console.log("categories", categories);
    res.json({ categories });
  } catch (err) {
    error(err, res);
  }
};
