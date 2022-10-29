export const queriesVuelos = {
  getVuelos: "SELECT * from Vuelos",
  getVueloById: "SELECT * FROM Vuelos Where Id_Vuelo = @Id_Vuelo",
  createVuelo:
    "INSERT INTO Vuelos (Id_Vuelo,origen,destino,Fecha_salida,Fecha_llegada) VALUES (@Id_Vuelo,@origen,@destino,@Fecha_salida,@Fecha_llegada);",
  deleteVuelo: "DELETE FROM Vuelos WHERE Id_Vuelo= @Id_Vuelo",
  updateVuelobyId:
    "UPDATE Vuelos SET Id_Vuelo = @Id_Vuelo, origen = @origen, destino = @destino, Fecha_salida = @Fecha_Salida, Fecha_llegada = @Fecha_llegada WHERE Id_Vuelo = @Id_Vuelo",
};
