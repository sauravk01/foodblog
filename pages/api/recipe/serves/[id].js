import RecipeServes from "../../../../model/recipe/serves";
import sessionProvider from "../../../../utils/sessionProvider";
import { error } from "../../../../utils/error/errorAPI";
import dbConnect from "../../../../utils/connectDB";
import { postNEdit } from "../../../../utils/API/withNextConnect/functions";
import { APIDeleteItem } from "../../../../utils/API/APIDeleteItem";
dbConnect();

export default async (req, res) => {
  switch (req.method) {
    case "PUT":
      await UpdateServes(req, res);
      break;
    case "DELETE":
      await DeleteServes(req, res);
  }
};

const UpdateServes = async (req, res) => {
  try {
    await postNEdit(req, res, RecipeServes);
  } catch (err) {
    error(err, res);
  }
};

const DeleteServes = async (req, res) => {
  await APIDeleteItem(req, RecipeServes, res);
};
