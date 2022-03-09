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
  .post(async (req, res) => {
    const recipe = JSON.parse(JSON.stringify(req.body));

    try {
      sessionProvider(req);
      recipeTitleValidation(req, res);
      // console.log("request", req.body);

      const url = `${staticResourceUrl}${req.file.filename}`;

      const newRecipe = new Recipe({
        ...recipe,
        image: url,
      });
      await newRecipe.save();

      res.json({
        msg: "success",
        newRecipe,
      });
    } catch (err) {
      error(err, res);
    }
  });
// .get();

// export default async (req, res) => {
//   switch (req.method) {
//     case "GET":
//       await getRecipes(req, res);
//       break;
//     case "POST":
//       await createRecipe(req, res);
//       break;
//   }
// };

// const createRecipe = async (req, res) => {
//   try {
//     sessionProvider(req);
//     const { title, subcategory } = req.body;
//     checkTitle(title);
//     checkCategory(subcategory);
//     const newRecipe = new Recipe({ subcategory, title });
//     await newRecipe.save();
//     res.json({
//       msg: "Success! created a new sub-category.",
//       newRecipe,
//     });
//   } catch (err) {
//     error(err, res);
//   }
// };

// const getRecipes = async (req, res) => {
//   try {
//     const recipe = await Recipe.find();

//     res.json({ recipe });
//   } catch (err) {
//     error(err, res);
//   }
// };

export default handler;
