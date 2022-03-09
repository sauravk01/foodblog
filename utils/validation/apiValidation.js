export const checkTitle = (title) => {
  if (!title)
    return res.status(400).json({ err: "Title can not be left blank" });
};

export const checkCategory = (category) => {
  if (!category)
    return res.status(400).json({ err: "Title can not be left blank" });
};
