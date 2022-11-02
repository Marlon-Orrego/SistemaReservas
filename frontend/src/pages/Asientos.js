import Sillas from "../components/Sillas";
import Navbar2 from "../components/Navbar2";

function Asientos() {
  const correo = localStorage.getItem("correo");
  if (!correo) {
    console.log("entro a login");
    return (window.location.href = "/login");
  } else
    return (
      <div>
        <Navbar2></Navbar2>
        <Sillas></Sillas>
      </div>
    );
}

export default Asientos;
