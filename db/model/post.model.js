import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
      required: true,
    },
    content: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      }
  },

);

const postModule = mongoose.model("post", postSchema);

export default postModule;




