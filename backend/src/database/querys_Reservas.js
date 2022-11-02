export const queriesClientes = {
  getReservas: "SELECT * from Reservas",
  getReservaById: "SELECT * FROM Reservas Where Id_Reserva = @Id_Reserva",
  createReserva:
    "INSERT INTO Reservas (Id_Reserva,Id_Vuelo,Id_Cliente,Precio) VALUES (@Id_Reserva,@Id_Vuelo,@Id_Cliente,@Precio);",
  deleteReserva: "DELETE FROM [SistemaReservas].[dbo].[Clientes] WHERE Id_Reserva= @Id_Reserva",
  updateReservabyId:
    "UPDATE [SistemaReservas].[dbo].[Clientes] SET Id_Reserva = @Id_Reserva, Id_Vuelo = @Id_Vuelo, Id_Cliente = @Id_Cliente, Precio = @Precio WHERE Id = @id",
};
