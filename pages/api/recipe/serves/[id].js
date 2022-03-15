import RecipeServes from "../../../../model/recipe/serves";
import sessionProvider from "../../../../utils/sessionProvider";
import { error } from "../../../../utils/error/errorAPI";
import dbConnect from "../../../../utils/connectDB";
dbConnect();

export default async (req, res) => {
  switch (req.method) {
    case "PUT":
      await UpdateServes(req, res);
      break;
  }
};

const UpdateServes = async (req, res) => {
  try {
    await sessionProvider(req);
    console.log(req.body);

    await RecipeServes.updateOne(
      { _id: req.query.id },
      { $set: { ...req.body } }
    );
    const updateServe = await RecipeServes.find({ _id: req.query.id });
    res.json({
      msg: "success",
      updateServe,
    });
  } catch (err) {
    error(err, res);
  }
};
