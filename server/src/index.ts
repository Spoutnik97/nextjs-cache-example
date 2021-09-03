import express from "express";
import { mockPosts } from "./mocks/posts";
import cors from "cors";

const app = express();
const port = 8080; // default port to listen

app.use(cors());

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/nocache", (req, res) => {
  res.status(200).json(mockPosts);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
