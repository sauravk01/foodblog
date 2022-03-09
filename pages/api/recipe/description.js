import dbConnect from "../../../utils/connectDB";
import sessionProvider from "../../../utils/sessionProvider";
import { error } from "../../../utils/error/errorAPI";
import nc from "next-connect";
import _ from "lodash";
import upload from "../../../utils/multer";
import {
  recipeDescriptionValidation,
  recipeTitleValidation,
} from "../../../utils/validation/recipeValidation";
import Description from "../../../model/recipe/description";
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
  .post(async (req, res) => {
    const recipeDescription = JSON.parse(JSON.stringify(req.body));
    console.log("request", req.body);

    try {
      sessionProvider(req);
      recipeDescriptionValidation(req, res);

      const url = `${staticResourceUrl}${req.file.filename}`;

      const newDescription = new Description({
        ...recipeDescription,
        image: url,
      });
      await newDescription.save();

      res.json({
        msg: "success",
        newDescription,
      });
    } catch (err) {
      error(err, res);
    }
  });

export default handler;