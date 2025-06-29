import express from "express";
import dogsRoutes from "../routes/dogsRoutes"
import { middleware } from "./middleware";

const router = express.Router();

router.use(middleware);
router.use('/dogs', dogsRoutes);

router.use('/', (req, res) => {
  const working = true;

  res.json({message: 'Api funcionando', working})
})

export default router;