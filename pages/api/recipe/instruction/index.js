import dbConnect from "../../../../utils/connectDB";
import sessionProvider from "../../../../utils/sessionProvider";
import { error } from "../../../../utils/error/errorAPI";
import nc from "next-connect";
import _ from "lodash";
import upload from "../../../../utils/multer";

import { recipeInstructionValidation } from "../../../../utils/validation/recipeValidation";
import instruction from "../../../../model/recipe/instruction";
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
    const recipeInstruction = JSON.parse(JSON.stringify(req.body));
    console.log("request", req.body);

    try {
      sessionProvider(req);
      recipeInstructionValidation(req, res);
      console.log("instruction", req.body);
      const url = `${staticResourceUrl}${req.file.filename}`;

      const newInstruction = new instruction({
        ...recipeInstruction,
        image: url,
      });
      await newInstruction.save();

      res.json({
        msg: "success",
        newInstruction,
      });
    } catch (err) {
      error(err, res);
    }
  });

export default handler;
