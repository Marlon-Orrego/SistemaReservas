import { Router } from "express";
import {
  getClientes,
  getClientebyId,
  updateCliente,
  deleteCliente,
  createCliente,
  
} from "../controllers/clientes.controller";

const router = Router();

router.get("/reservas", getClientes);
router.get("/reservas/:Id", getClientebyId);
router.put("/reservas/:Id", updateCliente);
router.delete("/reservas/:Id", deleteCliente);
router.post("/reservas", createCliente);


export default router;
