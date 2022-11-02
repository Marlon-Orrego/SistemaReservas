const app = require("express")();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // Para datos tipo application/json
app.use(bodyParser.urlencoded({ extended: false })); // Para datos tipo application/x-www-form-urlencoded
app.use(cors());
import express from "express";

import VuelosRoutes from "./routes/vuelos.routes";
import ClientesRoutes from "./routes/clientes.routes";
import ReservasRoutes from "./routes/reservas.routes";

import morgan from "morgan";
import config from "./config";

// settings
app.set("port", config.port);
app.use(VuelosRoutes);
app.use(ClientesRoutes);
app.use(ReservasRoutes);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", ClientesRoutes);
app.use("/api", VuelosRoutes);

export default app;
