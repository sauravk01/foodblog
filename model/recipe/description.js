const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const recipeDescriptionSchema = new Schema(
  {
    recipeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    orderNumber: {
      type: Number,
    },
    description: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports =
  mongoose.models.RecipeDescription ||
  mongoose.model("RecipeDescription", recipeDescriptionSchema);
