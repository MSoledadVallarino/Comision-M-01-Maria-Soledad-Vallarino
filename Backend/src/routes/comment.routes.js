import { Router } from "express";

import {
  ctrlCreateComment,
  ctrlListComment,
  ctrlGetComment,
  ctrlUpdateComment,
  ctrlDeleteComment,
} from "../controllers/comment.controller.js";

const commentRouter = Router();

commentRouter.post("/:postId/", ctrlCreateComment);

commentRouter.get("/:postId/", ctrlListComment);

commentRouter.get("/:postId/:commentId/", ctrlGetComment);

commentRouter.put("/:postId/:commentId/", ctrlUpdateComment);

commentRouter.delete("/:postId/:commentId/", ctrlDeleteComment);

export { commentRouter };
