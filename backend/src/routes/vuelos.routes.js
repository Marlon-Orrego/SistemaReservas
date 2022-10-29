import { Router } from "express";
import {
  getVuelos,
  updateVuelo,
  createVuelos,
  deleteVuelo,
  getVuelobyId,
} from "../controllers/vuelos.controller";

const router = Router();

router.get("/vuelos", getVuelos);
router.get("/vuelos/:Id_Vuelo", getVuelobyId);
router.put("/vuelos/:Id_Vuelo", updateVuelo);
router.delete("/vuelos/:Id_Vuelo", deleteVuelo);
router.post("/vuelos", createVuelos);

export default router;
