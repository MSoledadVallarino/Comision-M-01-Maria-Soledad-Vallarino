import { CommentModel } from "../models/Comment.js";
import { PostModel } from "../models/Post.js";

export const ctrlCreateComment = async (req, res) => {
  const userId = req.user._id;
  const { postId } = req.params;

  try {
    const comment = new CommentModel({
      ...req.body,
      author: userId,
      post: postId,
    });

    await comment.save();

    await PostModel.findByIdAndUpdate(
      { _id: postId },
      { $push: { comments: comment._id } }
    );

    res.status(201).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "No se pudo crear el comentario" });
  }
};

export const ctrlListComment = async (req, res) => {
  const { postId } = req.params;
  const userId = req.user._id;
  try {
    const comments = await CommentModel.find({ post: postId }, [
      "-__v",
    ]).populate("post", ["-comments", "-author", "-__v"]);

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "No se pudo encontrar los comentarios" });
  }
};

export const ctrlGetComment = async (req, res) => {
  const commentId = req.params;
  try {
    const comment = await CommentModel.findOne({ _id: commentId });
    res.status(200).json(comment);
  } catch (error) {
    res.status(404).json({ error: "No existe el comentario" });
  }
};

export const ctrlUpdateComment = async (req, res) => {
  const userId = req.user._id;
  const commentId = req.params;
  try {
    const comment = CommentModel.findOneAndUpdate({ _id: commentId }, req.body);
    res.status(200).json(comment);
  } catch (error) {
    res.status(404).json({ error: "No existe el comentario" });
  }
};

export const ctrlDeleteComment = async (req, res) => {
  const commentId = req.params;
  const userId = req.user._id;

  try {
    const comment = CommentModel.findOneAndDelete({ _id: commentId });
    res.status(200).json(comment);
  } catch (error) {
    res.status(404).json({ error: "No existe el comentario" });
  }
};
