import { PostModel } from "../models/Post.js";
import { CommentModel } from "../models/Comment.js";

export const ctrlCreatePost = async (req, res) => {
  const userId = req.user._id;
  try {
    const { title } = req.body;

    const post = new PostModel({
      title,
      autor: userId,
    });

    await post.save();

    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlListPost = async (req, res) => {
  const userId = req.user._id;

  try {
    const post = await PostModel.find({ author: userId })
      .populate("author", ["username", "avatar"])
      .populate("comments", ["author", "description"]);

    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlGetPost = async (req, res) => {};

export const ctrlUpdatePost = async (req, res) => {};

export const ctrlDeletePost = async (req, res) => {};
