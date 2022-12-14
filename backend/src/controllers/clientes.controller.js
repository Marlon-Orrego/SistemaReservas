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
export const authCliente = async (req, res) => {
  try {
    const pool = await getConnection();
    const userFound = await pool
      .request()
      .input("correo", sql.VarChar, req.body.correo)
      .query(queriesClientes.getClienteBycorreo);

    // Request body email can be an email or username
    if (!userFound) return res.status(400).json({ message: "User Not Found" });

    var matchPassword = false;
    if (req.body.contraseña == userFound.recordset[0].contraseña) {
      matchPassword = true;
    } else matchPassword = false;

    if (matchPassword == false)
      return res.status(401).json({
        message: "Invalid Password",
      });

    res.json({
      Id: userFound.recordset[0].Id,
      Nombre: userFound.recordset[0].Nombre,
      correo: userFound.recordset[0].correo,
      CountSillas: userFound.recordset[0].CountSillas,

    });
  } catch (error) {
    console.log(error);
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
  const { Id,CountSillas } = req.body;
  console.log(req.body)

  // validating
  if (CountSillas!=null||Id!=null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("CountSillas", sql.Int, CountSillas)
      .input("Id", sql.Int,Id)
      .query(queriesClientes.updateClientebyId);
    res.json({CountSillas});
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
