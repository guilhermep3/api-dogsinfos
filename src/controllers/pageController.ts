import { Request, Response } from "express";
import { getDogs } from "../models/dog";

export const home = (req: Request, res: Response) => {
  const { size, color, country } = req.query;
  let list = getDogs.getAll();

  if (size) {
    list = list.filter(d => d.size === size);
  }
  if (color && typeof color === 'string') {
    list = list.filter(d => d.colors.some(i => i.toLowerCase() === color.toLowerCase()));
  }
  if (country) {
    list = list.filter(d => d.countryOrigin === country);
  }

  res.json(list);
}

export const details = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    res.status(400).json({ error: 'ID inválido' });
    return;
  }

  const dog = getDogs.getFromId(id);

  if (!dog) {
    res.status(404).json({ error: 'Cachorro não encontrado' });
    return;
  }

  res.json(dog);
}