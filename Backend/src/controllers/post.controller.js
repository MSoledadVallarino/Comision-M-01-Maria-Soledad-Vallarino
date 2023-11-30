import { PostModel } from "../models/Post.js";
import { CommentModel } from "../models/Comment.js";

export const ctrlCreatePost = async (req, res) => {
  const userId = req.user._id;
  try {
    const { title } = req.body;

    const post = new PostModel({
      title,
      description,
      autor: userId,
      imageUrl,
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

export const ctrlGetPost = async (req, res) => {
  const userId = req.user._id;
  const { postId } = req.params;

  try {
    const post = await PostModel.findOne({
      _id: postId,
      author: userId,
    })
      .populate("author", ["username", "avatar"])
      .populate("comments", ["author", "description"]);

    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ errr: error.message });
  }
};

export const ctrlUpdatePost = async (req, res) => {
  const userId = req.user._id;
  const { postId } = req.params;

  try {
    const post = PostModel.findOne({
      _id: postId,
      user: userId,
    });

    if (!post) {
      return res.status(404).json({ error: "No se encuentra el post" });
    }

    post.set(req.body);

    await post.save();

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlDeletePost = async (req, res) => {};
