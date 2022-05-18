import Recipe from "../../../../model/recipe";
import { getRecipes } from "../../../../utils/API/withNextConnect/functions";
import dbConnect from "../../../../utils/connectDB";
import { error } from "../../../../utils/error/errorAPI";

dbConnect();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await searchRecipe(req, res);
      break;
    case "GET":
      await searchRecipe(req, res);
      break;
  }
};

const searchRecipe = async (req, res) => {
  try {
    console.log("terms", req.query);

    let one = req.body.sendTerms;
    if (req.method === "POST") {
      one = req.body.sendTerms;
    }
    if (req.method === "GET") {
      one = req.query.id;
    }

    const data = await Recipe.find(
      //   { "$or": [
      //     { "title": { "$regex": `${one[one.lenght - 2]}`} },
      //     { "title": { "$regex": `/[A-Za-z0-9 ]*${one[one.lenght - 1]}*/gims` }}
      // ]}
      {
        $or: [
          // {{
          //   title: {
          //     $regex: `[A-Za-z0-9]${one[one.lenght - 2]}*`,
          //     $options: "is",
          //   },
          // },
          //   title: {
          //     $regex: `[A-Za-z0-9]${one[one.lenght - 2]}*`,
          //     $options: "is",
          //   },
          // },
          {
            themeTitleRecipe: {
              $regex: `[A-Za-z0-9 ]*${one}*`,
              $options: "is",
            },
          },
          {
            title: {
              $regex: `[A-Za-z0-9]${one}*`,
              $options: "is",
            },
          },
        ],
      }
    );
    // console.log("data", data);
    res.json({ msg: "success", data });
  } catch (err) {
    error(err, res);
  }
};
