import dbConnect from "../../../utils/connectDB";
import RecipeServes from "../../../model/recipe/serves";
import sessionProvider from "../../../utils/sessionProvider";
import { error } from "../../../utils/error/errorAPI";

dbConnect();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await createServe(req, res);
      break;
  }
};

const createServe = async (req, res) => {
  try {
    await sessionProvider(req);
    console.log(req.body);

    const newServe = new RecipeServes({
      ...req.body,
    });
    await newServe.save();
    res.json({
      msg: "Success! created a new serve.",
      newServe,
    });
  } catch (err) {
    error(err, res);
  }
};
