import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import { today, thisWeek, thisMonth, Post } from "../posts";

const app = express();
app.use(cors());
app.use(bodyparser.json());

const allPosts = [today, thisWeek, thisMonth]

app.get("/posts", (req, res) => {
  res.json(allPosts);
});

app.post<{}, {}, Post>("/posts", (req, res) => {
  const post: Post = {
    ...req.body,
    id: (Math.random() * 100000).toFixed()
  }
  
  allPosts.push(post)

  res.json(post);
});

app.listen(8712, () => {
    console.log('listening on port 8712')
})