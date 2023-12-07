import { Router } from "express";
import {
  ctrlGetPost,
  ctrlCreatePost,
  ctrlDeletePost,
  ctrlListPost,
  ctrlUpdatePost,
} from "../controllers/post.controller.js";

import {
  createPostValidator,
  deletePostValidator,
  getPostValidator,
  listPostValidator,
  updatePostValidator,
} from "../models/validations/post-validations.js";

const postRouter = Router();

// traer todos los posteos
postRouter.get("/", listPostValidator, ctrlListPost);

//crear un nuevo posteo
postRouter.post("/", createPostValidator, ctrlCreatePost);

//traer un posteo, modificarlo y borrarlo
postRouter.get("/:postId", getPostValidator, ctrlGetPost);
postRouter.put("/:postId", updatePostValidator, ctrlUpdatePost);
postRouter.delete("/:postId", deletePostValidator, ctrlDeletePost);

export { postRouter };
