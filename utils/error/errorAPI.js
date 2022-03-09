export const error = (err, res) => {
  if (err && err.code === 11000) {
    return res.json({ err: "Item already exists" });
  }
  return res.status(500).json({ err: err.message });
};
