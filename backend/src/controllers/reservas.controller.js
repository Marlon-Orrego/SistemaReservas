import { getConnection, sql } from "../database/connection";
import { queriesReservas } from "../database";

export const getReservas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queriesReservas.getReservas);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const getReservabyId = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id", req.params.Id)
      .query(queriesReservas.getReservabyId);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteReserva = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id", req.params.Id)
      .query(queriesReservas.deleteReserva);
    if (result.rowsAffected[0] === 0) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateReserva = async (req, res) => {
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
      .query(queriesReservas.updateReserva);
    res.json({ Nombre, correo, contraseña, Id });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createReserva = async (req, res) => {
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
      .query(queriesReservas.createReserva);
    res.json({ Nombre, correo, contraseña, Id });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
