import dbConnect from "../../../../utils/connectDB";
import RecipeServes from "../../../../model/recipe/serves";
import sessionProvider from "../../../../utils/sessionProvider";
import { error } from "../../../../utils/error/errorAPI";

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
    // console.log(req.body);

    const data = new RecipeServes({
      ...req.body,
    });
    await data.save();
    res.json({
      msg: "Success! created a new serve.",
      data,
    });
  } catch (err) {
    error(err, res);
  }
};
