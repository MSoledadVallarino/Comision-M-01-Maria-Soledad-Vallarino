import { CommentModel } from "../models/Comment.js";
import { PostModel } from "../models/Post.js";

export const ctrlCreateComment = async (req, res) => {
  const userId = req.user._id;
  const { postId } = req.params;

  try {
    const comment = new CommentModel({
      ...req.body,
      post: postId,
      author: userId,
    });

    await comment.save();

    await PostModel.findByIdAndUpdate(
      { _id: postId },
      { $push: { comments: comment._id } }
    );

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: "No se pudo crear el comentario" });
  }
};

export const ctrlListComment = async (req, res) => {
  const { postId } = req.params;
  const userId = req.user.id;

  try {
    const comments = await CommentModel.find({ post: postId }, [
      "-__v",
    ]).populate("post", ["-comments", "-__v"]);

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "No se pudo encontrar los comentarios" });
  }
};

export const ctrlGetComment = async (req, res) => {
  const { commentId, postId } = req.params;
  const userId = req.user.id;

  try {
    const comment = await CommentModel.findOne({
      _id: commentId,
      post: postId,
    }).populate("post");

    if (!comment) {
      return res.status(404).json({ error: "No existe el comentario" });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: "No se pudo encontrar el comentario" });
  }
};

export const ctrlUpdateComment = async (req, res) => {
  const { commentId, postId } = req.params;
  const userId = req.user._id;

  try {
    const comment = await CommentModel.findOne({ _id: commentId });

    if (!comment) {
      return res.status(404).json({ error: "No existe el comentario" });
    }
    comment.set(req.body);

    await comment.save();

    res.status(200).json(comment);
  } catch (error) {
    res.status(404).json({ error: "No se pudo actualizar el comentario" });
  }
};

export const ctrlDeleteComment = async (req, res) => {
  const { commentId, postId } = req.params;
  const userId = req.user._id;

  try {
    await CommentModel.findOneAndDelete({ _id: commentId, post: postId });

    await PostModel.findOneAndUpdate(
      { _id: postId },
      { $pull: { comments: commentId } }
    );

    res.status(200).json();
  } catch (error) {
    res.status().json({ error: "No se pudo eliminar el comentario" });
  }
};
