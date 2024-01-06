import express from "express";
import postRouter from "./src/modules/posts/controller/post.routes.js";
import userRouter from "./src/modules/user/controller/user.routes.js";
import initConnection from './db/connection.js';

const app= express();

initConnection();


app.use(express.json());
app.use(postRouter);
app.use(userRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });