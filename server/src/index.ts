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

app.use((req, res, next) => {
  setTimeout(() => {
    next();
  }, 1000);
});

app.get("/nocache", (req, res) => {
  console.log(Date.now(), "Delivering some no-cached content");

  console.log("Host : ", req.headers.host, " - Origin : ", req.headers.origin);

  res.status(200).json(mockPosts);
});

app.get("/cache", (req, res) => {
  console.log(Date.now(), "Delivering some cached content");

  res.set("Cache-control", "public, max-age=30");
  res.status(200).json(mockPosts);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
