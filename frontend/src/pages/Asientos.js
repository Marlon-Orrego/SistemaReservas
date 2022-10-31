import Sillas from "../components/Sillas";

function Asientos() {
  const correo = localStorage.getItem("correo");
  if (!correo) {
    console.log("entro a login");
    return (window.location.href = "/login");
  } else
    return (
      <div>
        <Sillas></Sillas>
      </div>
    );
}

export default Asientos;
