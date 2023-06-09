import express from "express";

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  AddLikeToPost,
  RemoveLikeFromPost,
  addCommentToPost,
  allComments,
  likeComment,
  replyComment,
  viewCount,
} from "../controllers/posts.js";
import { Upload } from "../middlewares/upload.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", Upload, createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.put("/:id/like", AddLikeToPost);
router.delete("/:id/like", RemoveLikeFromPost);
router.get("/:id/comments", allComments);
router.post("/:id/comments", addCommentToPost);
router.patch("/:id/comments/:commentId/like", likeComment);
router.patch("/:id/comments/:commentId/reply", replyComment);
router.patch("/:id/viewcount", viewCount);

export default router;

// canvas to img