import express from "express";
import clients from "./routesClient.js"

const routes = express.Router();

routes.route("/").get((req, res) => res.status(200).send("Clients API"));
routes.use(clients);

 export default routes;