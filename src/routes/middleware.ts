import { RequestHandler } from "express";

export const middleware: RequestHandler = (req, res, next) => {
  console.log('Executou o middlware');
  let isLogged = true;

  if(isLogged){
    next();
  } else {
    res.status(403).json({error: 'Usuário não está logado'});
  }
}