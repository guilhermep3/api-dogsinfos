import { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundRequest: RequestHandler = (req, res) => {
  res.json({error: 'Route not found'});
}

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.json({error: 'Ocorreu um erro'});
}