import dbConnect from "../../../../utils/connectDB";
import sessionProvider from "../../../../utils/sessionProvider";
import { error } from "../../../../utils/error/errorAPI";
import nc from "next-connect";
import _ from "lodash";
import upload from "../../../../utils/multer";

import { recipeInstructionValidation } from "../../../../utils/validation/recipeValidation";
import RecipeInstruction from "../../../../model/recipe/instruction";
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
    const recipeInstruction = JSON.parse(JSON.stringify(req.body));
    console.log("put request", req.body);

    try {
      sessionProvider(req);
      //   recipeInstructionValidation(req, res);
      console.log("instruction", recipeInstruction);
      const url = `${staticResourceUrl}${req.file.filename}`;

      await RecipeInstruction.updateOne(
        { _id: req.query.id },
        {
          $set: { ...recipeInstruction, image: url },
        }
      );

      res.json({
        msg: "success",
      });
    } catch (err) {
      error(err, res);
    }
  });

export default handler;
