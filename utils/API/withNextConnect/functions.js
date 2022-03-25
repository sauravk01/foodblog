import sessionProvider from "../../sessionProvider";
import { recipeTitleValidation } from "../../validation/recipeValidation";
export const staticResourceUrl = process.env.STATIC_RESOURCE_URL;
export const ncValidators = {
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke");
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
};
export async function postNEdit(req, res, model, data) {
  const items = JSON.parse(JSON.stringify(req.body));
  const properties = { ...items, ...data } || { ...items };
  sessionProvider(req);
  console.log("request", req.body);
  console.log("model", model);
  const url = `${staticResourceUrl}${req.file.filename}`;
  if (req.query.id) {
    await model.updateOne(
      { _id: req.query.id },
      {
        $set: {
          ...data,
          image: url,
        },
      }
    );
    res.json({
      msg: "success",
    });
  } else {
    const data = new model({
      ...properties,
      image: url,
    });
    await data.save();
    res.json({
      msg: "success created",
      data,
    });
  }
}

export async function getRecipes(req, res, model) {
  const data = await model.aggregate([
    {
      $lookup: {
        from: "recipedescriptions",
        localField: "_id",
        foreignField: "recipeId",
        as: "descriptions",
      },
    },
    {
      $lookup: {
        from: "recipeinstructions",
        localField: "_id",
        foreignField: "recipeId",
        as: "instructions",
      },
    },

    {
      $lookup: {
        from: "recipeserves",
        localField: "_id",
        foreignField: "recipeId",
        as: "serves",
      },
    },
  ]);
  res.json({ data });
}
