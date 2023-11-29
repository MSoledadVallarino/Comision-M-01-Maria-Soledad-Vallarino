import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
  autor: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  description: {
    type: String,
    maxLength: 1000,
    minLength: 100,
  },
  timestamps: true,
  versionKey: false,
});

export const CommentModel = model("Comment", CommentSchema);
