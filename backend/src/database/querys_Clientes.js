export const queriesClientes = {
  getClientes: "SELECT * from Clientes",
  getClienteById: "SELECT * FROM Clientes Where Id = @Id",
  getClienteBycorreo: "SELECT * FROM Clientes Where correo = @correo",
  createCliente:
    "INSERT INTO Clientes (Id,Nombre,correo,contraseña) VALUES (@Id,@Nombre,@correo,@contraseña);",
  deleteCliente: "DELETE FROM [SistemaReservas].[dbo].[Clientes] WHERE Id= @id",
  updateClientebyId:
    "UPDATE [SistemaReservas].[dbo].[Clientes] SET CountSillas = @CountSillas WHERE Id = @Id",
};
