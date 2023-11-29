import { Router } from "express";
import {
  ctrlGetPost,
  ctrlCreatePost,
  ctrlDeletePost,
  ctrlListPost,
  ctrlUpdatePost,
} from "../controllers/post.controller.js";

const postRouter = Router();

// traer todos los posteos
postRouter.get("/", ctrlListPost);

//crear un nuevo posteo
postRouter.post("/:postId", ctrlCreatePost);

//traer un posteo, modificarlo y borrarlo
postRouter.get("/:postId", ctrlGetPost);
postRouter.put("/:postId", ctrlUpdatePost);
postRouter.delete("/:postId", ctrlDeletePost);

export { postRouter };
