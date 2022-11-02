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
      .input("Id_Reserva", req.params.Id)
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
      .input("Id_Reserva", req.params.Id)
      .query(queriesReservas.deleteReserva);
    if (result.rowsAffected[0] === 0) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateReserva = async (req, res) => {
  const { Id_Reserva, Id_Vuelo, Id_Cliente, Precio } = req.body;

  // validating
  if (Id == null || Id_Reserva == null || Id_Vuelo == null || Id_Cliente == null|| Precio == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_Reserva", sql.VarChar, Id_Reserva)
      .input("Id_Vuelo", sql.VarChar, Id_Vuelo)
      .input("Precio", sql.Int, Precio)
      .input("Id_Cliente", sql.VarChar, Id_Cliente)
      .input("Id", req.params.Id)
      .query(queriesReservas.updateReserva);
    res.json({ Id_Reserva, Id_Vuelo, Id_Cliente, Precio });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createReserva = async (req, res) => {
  const { Id_Reserva, Id_Vuelo, Id_Cliente, Precio } = req.body;

  // validating
  if ( Id_Reserva == null || Id_Vuelo == null || Id_Cliente == null|| Precio == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("Id_Reserva", sql.Int, Id_Reserva)
      .input("Id_Vuelo", sql.Int, Id_Vuelo)
      .input("Id_Cliente", sql.Int, Id_Cliente)
      .input("Precio", sql.Int, Precio)
      .query(queriesReservas.createReserva);
    res.json({ Id_Reserva, Id_Vuelo, Id_Cliente, Precio });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
