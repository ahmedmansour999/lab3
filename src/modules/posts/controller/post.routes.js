
import express from "express";
import { allPost ,addPost ,deletePost ,updatePost ,allPostOwner ,sortPost} from "../controller/post.controlle.js";
const postRouter = express.Router();

postRouter.post("/post", addPost);

postRouter.delete("/post/:id", deletePost);
postRouter.put("/post/:id", updatePost);
postRouter.get("/post", allPost);
postRouter.get("/post/sortByDate", sortPost);
postRouter.get("/post/withOwners", allPostOwner);

export default postRouter;








