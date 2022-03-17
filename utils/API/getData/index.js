export async function APIData(req, model, res) {
  let data;
  if (req === "all") {
    data = await model.find();

    return res.json({ data });
  }
  if (req.type == "id") {
    data = await model.findOne({ _id: res.id });

    return res.json({ data });
  }
}
