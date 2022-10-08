import express from "express";
//import cors from "cors";
import clientesRoutes from "./routes/clientes.routes";
//import morgan from "morgan";
import config from "./config";

const app = express();

// settings
app.set("port", config.port);
app.use(clientesRoutes)

/*
// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", productRoutes);*/

export default app;