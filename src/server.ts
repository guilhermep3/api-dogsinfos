import express from "express";
import helmet from "helmet";
import path from "path";
import indexRoutes from "./routes";
import { errorHandler, notFoundRequest } from "./routes/errorHandler";

const server = express();
const port = process.env.PORT || 3001;

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.resolve(__dirname, '../public')));

server.use(indexRoutes);
server.use(notFoundRequest);
server.use(errorHandler);

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});