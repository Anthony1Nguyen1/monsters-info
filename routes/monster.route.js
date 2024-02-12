import express from "express";
import { createMonster, deleteMonster, getMonsters, updateMonster, getMonster } from "../controllers/monster.controller.js";
import { validateMonsterData } from "../services/monster.service.js";
const router = express.Router();

router.get("/", getMonsters);
router.get("/:id", getMonster);
router.post("/", validateMonsterData, createMonster);
router.patch("/:id", updateMonster);
router.delete("/:id", deleteMonster);

export default router;