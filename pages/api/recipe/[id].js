import dbConnect from "../../../utils/connectDB";
import sessionProvider from "../../../utils/sessionProvider";
import { error } from "../../../utils/error/errorAPI";
import Recipe from "../../../model/recipe";
import nc from "next-connect";
import _ from "lodash";
import upload from "../../../utils/multer";
import { recipeTitleValidation } from "../../../utils/validation/recipeValidation";
const staticResourceUrl = process.env.STATIC_RESOURCE_URL;
dbConnect();

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke");
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
})
  .use(upload.single("image"))
  .put(async (req, res) => {
    const recipe = JSON.parse(JSON.stringify(req.body));

    try {
      sessionProvider(req);
      recipeTitleValidation(req, res);
      console.log("request", req.query.id);
      console.log("request body", recipe);
      const url = `${staticResourceUrl}${req.file.filename}`;

      // if (req.query.id.slice(-8) == "-success") {
      //   const newRecipe = await Recipe.find({ _id: req.query.id });
      //   res.json({
      //     msg: "success",
      //     newRecipe,
      //   });
      // }
      await Recipe.updateOne(
        { _id: req.query.id },
        {
          $set: {
            title: req.body.title,
            themeTitleRecipe: req.body.themeTitleRecipe,
            subCategories: req.body.subCategories,
            image: url,
          },
        }
      );
      res.json({
        msg: "success",
      });
    } catch (err) {
      error(err, res);
    }
  })
  .get(async (req, res) => {
    try {
      console.log("req", req.query);
      const data = await Recipe.aggregate([
        //   {
        //     $match: { recipeId: req.query.id },
        //   },

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
    } catch (err) {
      error(err, res);
    }
  });

export default handler;
