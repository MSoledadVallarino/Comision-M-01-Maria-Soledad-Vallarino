import { Schema, model } from "mongoose";

const CommentSchema = new Schema(
  {
    description: {
      type: String,
      maxLength: 1000,
      minLength: 10,
    },

    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const CommentModel = model("Comment", CommentSchema);
