import express from "express";
import helmet from "helmet";
import path from "path";
import indexRoutes from "../src/routes";
import { errorHandler, notFoundRequest } from "./routes/errorHandler";

const server = express();
const port = 3001;

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(express.static(path.join(__dirname, '../public')));

server.use(indexRoutes);
server.use(notFoundRequest);
server.use(errorHandler);

server.listen(port, () => {
  console.log("Servidor rodando em http://localhost:3001")
})