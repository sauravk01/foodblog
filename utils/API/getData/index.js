export async function APIData(dataAsked, model, res) {
  let data;
  if (dataAsked === "all") {
    data = await model.find();
    // console.log("data", data);
    return res.json({ data });
  }
  if (dataAsked.type == "id") {
    data = await model.findOne({ _id: res.id });

    return res.json({ data });
  }
}
