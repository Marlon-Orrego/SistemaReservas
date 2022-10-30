import axios from "axios";

const getVuelos = async (state) => {
  const vuelos = await axios.get("http://localhost:3000/vuelos");
  state(vuelos.data);
};

export { getVuelos };
