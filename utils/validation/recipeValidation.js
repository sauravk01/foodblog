export const recipeTitleValidation = (req, res) => {
  if (!req.body.title || !req.body.subCategories || !req.body.themeTitleRecipe)
    return res.status(400).json({ err: `item details can not be left blank.` });
};

export const recipeDescriptionValidation = (req, res) => {
  if (
    !req.body.recipeId ||
    !req.file ||
    // !req.body.orderNumber ||
    !req.body.description
  )
    return res.status(400).json({ err: `item details can not be left blank.` });
};
