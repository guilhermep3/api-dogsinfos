import express from "express";
import { getDogs } from "../models/dog";
import * as searchController from "../controllers/searchController";
import * as pageController from "../controllers/pageController";

const router = express.Router();

router.get('/', pageController.home);
router.get('/search', searchController.search);
router.get('/:id', pageController.details);

router.get('/all', (req, res) => {
  const list = getDogs.getAll();

  res.json({ dogs: list });
})

export default router;