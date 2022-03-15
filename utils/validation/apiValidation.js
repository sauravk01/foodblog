export const checkTitle = (title, res) => {
  if (!title)
    return res.status(400).json({ err: "Title can not be left blank" });
};

export const checkCategory = (category, res) => {
  if (!category)
    return res.status(400).json({ err: "Category can not be left blank" });
};
