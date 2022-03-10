const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const recipeInstructionSchema = new Schema(
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
    instruction: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports =
  mongoose.models.RecipeInstruction ||
  mongoose.model("RecipeInstruction", recipeInstructionSchema);
