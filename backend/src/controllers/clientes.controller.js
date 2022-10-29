import { getConnection, sql } from "../database/connection";
import { queriesClientes } from "../database";

export const getClientes = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queriesClientes.getClientes);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getClientebyId = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id", req.params.Id)
      .query(queriesClientes.getClienteById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id", req.params.Id)
      .query(queriesClientes.deleteCliente);
    if (result.rowsAffected[0] === 0) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateCliente = async (req, res) => {
  const { Nombre, correo, Id, contraseña } = req.body;

  // validating
  if (Id == null || Nombre == null || correo == null || contraseña == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Nombre", sql.VarChar, Nombre)
      .input("correo", sql.VarChar, correo)
      .input("contraseña", sql.VarChar, contraseña)
      .input("Id", req.params.Id)
      .query(queriesClientes.updateClientebyId);
    res.json({ Nombre, correo, contraseña, Id });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createCliente = async (req, res) => {
  const { Nombre, Id, correo, contraseña } = req.body;
  // validating
  if (Id == null || Nombre == null || correo == null || contraseña == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id", sql.Int, Id)
      .input("Nombre", sql.VarChar, Nombre)
      .input("correo", sql.VarChar, correo)
      .input("contraseña", sql.VarChar, contraseña)
      .query(queriesClientes.createCliente);
    res.json({ Nombre, correo, contraseña, Id });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
