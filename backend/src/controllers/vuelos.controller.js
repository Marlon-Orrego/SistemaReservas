import { getConnection, sql } from "../database/connection";
import { queriesVuelos } from "../database";

export const getVuelos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queriesVuelos.getVuelos);
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getVuelobyId = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_Vuelo", req.params.Id_Vuelo)
      .query(queriesVuelos.getVueloById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const deleteVuelo = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("Id_Vuelo", req.params.Id)
      .query(queriesVuelos.deleteVuelo);
    if (result.rowsAffected[0] === 0) return res.sendStatus(404);
    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateVuelo = async (req, res) => {
  const { Id_Vuelo, origen, destino, Fecha_salida, Fecha_llegada } = req.body;

  // validating
  if (
    Id_Vuelo == null ||
    origen == null ||
    destino == null ||
    Fecha_llegada == null ||
    Fecha_salida == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("origen", sql.VarChar, origen)
      .input("destino", sql.VarChar, destino)
      .input("Fecha_llegada", sql.Date, Fecha_llegada)
      .input("Fecha_salida", sql.Date, Fecha_salida)
      .input("Id_Vuelo", req.params.Id_Vuelo)
      .query(queriesVuelos.updateVuelobyId);
    res.json({ Id_Vuelo, origen, destino, Fecha_llegada, Fecha_salida });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createVuelos = async (req, res) => {
  const { Id_Vuelo, origen, destino, Fecha_salida, Fecha_llegada } = req.body;

  // validating
  if (
    Id_Vuelo == null ||
    origen == null ||
    destino == null ||
    Fecha_llegada == null ||
    Fecha_salida == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("origen", sql.VarChar, origen)
      .input("destino", sql.VarChar, destino)
      .input("Fecha_llegada", sql.Date, Fecha_llegada)
      .input("Fecha_salida", sql.Date, Fecha_salida)
      .input("Id_Vuelo", sql.Int(), Id_Vuelo)
      .query(queriesVuelos.createVuelo);
    res.json({ Id_Vuelo, origen, destino, Fecha_llegada, Fecha_salida });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
