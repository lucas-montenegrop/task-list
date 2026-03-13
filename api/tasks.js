import express from "express";
import { createTask } from "#db/queries/tasks";
import { requireBody } from "#middleware/requireBody";
import requireUser from "#middleware/requireUser";

const router = express.Router();
export default router;

router.use(requireUser);

router.get("/", async (req, res) => {
  //TODO
});

router.post("/", requireBody(["done", "title"]), async (req, res) => {
  const { title, done } = req.body;
  const task = await createTask(title, done, req.user.id);
  res.status(201).send(task);
});