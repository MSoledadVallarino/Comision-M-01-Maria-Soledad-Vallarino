import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  avatar: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
  comments: {
    type: Schema.Types.ObjectId,
    ref: "Comment",
  },
});

export const UserModel = model("User", UserSchema);
