export const queriesClientes = {
  getClientes: "SELECT * from Clientes",
  getClienteById: "SELECT * FROM Clientes Where Id = @Id",
  createCliente:
    "INSERT INTO Clientes (Id,Nombre,correo,contraseña) VALUES (@Id,@Nombre,@correo,@contraseña);",
  deleteCliente: "DELETE FROM [SistemaReservas].[dbo].[Clientes] WHERE Id= @id",
  updateClientebyId:
    "UPDATE [SistemaReservas].[dbo].[Clientes] SET Nombre = @Nombre, contraseña = @contraseña, correo = @correo, Id = @id WHERE Id = @id",
};
