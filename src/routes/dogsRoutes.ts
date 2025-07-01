import express from "express";
import { getDogs } from "../models/dog";
import * as searchController from "../controllers/searchController";
import * as pageController from "../controllers/pageController";

const router = express.Router();

router.get('/', (req, res) => {
  const dogs = getDogs.getAll();
  res.json(dogs)
})
router.get('/search', searchController.search);
router.get('/:id', pageController.details);

export default router;