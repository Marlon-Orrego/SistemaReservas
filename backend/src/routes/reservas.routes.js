import { Router } from "express";
import {
  getReservas,
  getReservabyId,
  updateReserva,
  deleteReserva,
  createReserva,  
} from "../controllers/reservas.controller";

const router = Router();

router.get("/reservas", getReservas);
router.get("/reservas/:Id", getReservabyId);
router.put("/reservas/:Id", updateReserva);
router.delete("/reservas/:Id", deleteReserva);
router.post("/reservas", createReserva);


export default router;
