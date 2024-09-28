import express from "express";
import clientController from "../controller/clientController.js";

const routes = express.Router();

routes.get("/clients", clientController.listClients);

export default routes;