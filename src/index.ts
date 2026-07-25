import express from "express";
import { client } from "./db";
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const user = await client.user.findMany();

  res.json({
    message: "user is :",
    user,
  });
});

app.post("/", async (req, res) => {
  const user = await client.user.create({
    data: {
      name: Math.random.toString(),
      password: Math.random.toString(),
    },
  });
  res.json({
    message: "user is created",
  });
});

app.listen(3000, () => {
  console.log("server is running ...");
});
