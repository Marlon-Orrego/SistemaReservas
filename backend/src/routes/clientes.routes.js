import { Router } from "express";
import {
  getClientes,
  getClientebyId,
  updateCliente,
  deleteCliente,
  createCliente,
  authCliente
  
} from "../controllers/clientes.controller";

const router = Router();

router.get("/clientes", getClientes);
router.get("/clientes/:Id", getClientebyId);
router.put("/clientes/:Id", updateCliente);
router.delete("/clientes/:Id", deleteCliente);
router.post("/clientes", createCliente);
router.post("/clientes/auth", authCliente);

export default router;
