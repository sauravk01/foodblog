import { error } from "../error/errorAPI";
import sessionProvider from "../sessionProvider";

export async function APIDeleteItem(req, model, res) {
  try {
    const id = req.query.id;
    //find the product in that Category and delete them all
    //code not written
    console.log("id", id);
    sessionProvider(req);

    await model.findByIdAndDelete(id);
    return res.json({ msg: "success" });
  } catch (err) {
    error(err, res);
  }
}
