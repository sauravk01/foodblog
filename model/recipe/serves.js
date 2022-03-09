const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const recipeServesSchema = new Schema({
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
    required: true,
  },
  numberOfServing: {
    type: Number,
    required: true,
  },
  timeForPrepration: [
    {
      // type: { type: String },
      time: Number,
      title: String,
    },
  ],
  ingredients: [
    {
      quantity: Number,
      unit: String,
      description: String,
    },
  ],
  specialEquipments: {
    type: String,
  },
});

module.exports =
  mongoose.models.RecipeServes ||
  mongoose.model("RecipeServes", recipeServesSchema);
