import { Request, Response } from "express";
import { getDogs } from "../models/dog";

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;

  if (!query) {
    res.status(400).json({ error: 'Informe uma raça para buscar.' });
    return;
  };

  let list = getDogs.getFromBreed(query);

  if (list.length === 0) {
    res.status(404).json({ error: 'Nenhum cachorro encontrado com essa raça.' });
    return;
  }

  res.json(list);
};