import { Router } from "express";
import {
  getReservas,
  getReservabyId,
  updateReserva,
  deleteReserva,
  createReserva,  
} from "../controllers/reservas.controller";

const router = Router();

router.get("/clientes", getReservas);
router.get("/clientes/:Id", getReservabyId);
router.put("/clientes/:Id", updateReserva);
router.delete("/clientes/:Id", deleteReserva);
router.post("/clientes", createReserva);


export default router;
