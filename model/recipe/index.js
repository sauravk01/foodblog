const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: [2, "Too short"],
      maxlength: [30, "Too long"],
    },
    subCategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
      },
    ],
    image: {
      type: String,
      required: true,
    },
    themeTitleRecipe: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports =
  mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);
