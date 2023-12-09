import { Router } from "express";

import {
  ctrlCreateComment,
  ctrlListComment,
  ctrlGetComment,
  ctrlUpdateComment,
  ctrlDeleteComment,
} from "../controllers/comment.controller.js";

import {
  createCommentValidator,
  listCommentValidator,
  getCommentValidator,
  updateCommentValidator,
  deleteCommentValidator,
} from "../models/validations/comment-validations.js";

const commentRouter = Router();

commentRouter.post("/:postId/", createCommentValidator, ctrlCreateComment);

commentRouter.get("/:postId/", listCommentValidator, ctrlListComment);

commentRouter.get("/:postId/:commentId/", getCommentValidator, ctrlGetComment);

commentRouter.patch(
  "/:postId/:commentId/",
  updateCommentValidator,
  ctrlUpdateComment
);

commentRouter.delete(
  "/:postId/:commentId/",
  deleteCommentValidator,
  ctrlDeleteComment
);

export { commentRouter };
