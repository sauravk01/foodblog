import dbConnect from "../../../../utils/connectDB";
import sessionProvider from "../../../../utils/sessionProvider";
import { error } from "../../../../utils/error/errorAPI";
import nc from "next-connect";
import _ from "lodash";
import upload from "../../../../utils/multer";
import { recipeDescriptionValidation } from "../../../../utils/validation/recipeValidation";
import RecipeDescription from "../../../../model/recipe/description";
import { getData } from "../../../../utils/API/getData";
import { APIDeleteItem } from "../../../../utils/API/APIDeleteItem";
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
  .delete(async (req, res) => {
    await APIDeleteItem(req, RecipeDescription, res);
  })
  .put(async (req, res) => {
    const recipeDescription = JSON.parse(JSON.stringify(req.body));
    const blocks = JSON.parse(recipeDescription.description);
    console.log("req->>>", recipeDescription);
    console.log("req-query->>>", req.query.id);
    const description = {
      time: recipeDescription.time,
      blocks: blocks,
      version: recipeDescription.version,
    };
    try {
      sessionProvider(req);
      recipeDescriptionValidation(req, res);

      const url = `${staticResourceUrl}${req.file.filename}`;

      await RecipeDescription.updateOne(
        { _id: req.query.id },
        {
          $set: { ...recipeDescription, description, image: url },
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
    let info = { type: "id", id: req._id };
    getData(info, RecipeDescription, res);
  });

export default handler;
