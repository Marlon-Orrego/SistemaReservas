import { getConnection } from "../database/connection";

export const getClientes =async (req,res)=>{
    try {
    const pool= await getConnection();
    const result = await pool.request().query('select * from cliente')
    console.log(result)
    res.json(result.recordset)}
    catch (error) {
        res.status(500);
    res.send(error.message);
  }
}
/*
export const createNewProduct = async (req, res) => {
    const { name, description } = req.body;
    let { quantity } = req.body;
  
    // validating
    if (description == null || name == null) {
      return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
  
    if (quantity == null) quantity = 0;
  
    try {
      const pool = await getConnection();
  
      await pool
        .request()
        .input("name", sql.VarChar, name)
        .input("quantity", sql.Int, quantity)
        .query(querys.addNewProduct);
  
      res.json({ name, description, quantity });
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  */
