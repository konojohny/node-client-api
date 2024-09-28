import express from "express";
import clientController from "../controller/clientController.js";

const routes = express.Router();

routes.get("/clients", clientController.listClients);
routes.post("/clients", clientController.createClient);
routes.get("/clients/:id", clientController.listClientsId);
routes.put("/clients/:id", clientController.updateClient);
routes.delete("/clients/:id", clientController.deleteClient);

export default routes;