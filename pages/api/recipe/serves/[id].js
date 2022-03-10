import RecipeServes from "../../../../model/recipe/serves";
import sessionProvider from "../../../../utils/sessionProvider";
import { error } from "../../../../utils/error/errorAPI";

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

    const updateServe = RecipeServes.findByIdAndUpdate(req.query.id, {
      ...req.body,
    });
    await updateServe.save();
    res.json({
      msg: "Success! updated serves.",
      updateServe,
    });
  } catch (err) {
    error(err, res);
  }
};
