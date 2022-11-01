import "../css/sillas.css";
import styles from "../styles";

function Sillas() {
  var suma = 0;
  var total_reserva = 0;
  //Evento click Silla General
  const selectSeat = (seat) => {
    console.log(seat.target.index);
    if (localStorage.getItem("#sillasSelected") < 3) {
      // Seat click event
      if (
        seat.target.classList.contains("seat") &&
        !seat.target.classList.contains("occupied")
      ) {
        seat.target.classList.toggle("selected");
        suma += 1;
        localStorage.setItem("#sillasSelected", suma);
        console.log(suma);
      }
      updateSelectedCount();
    } else return console.log("No es permitido más de 3 asientos");
  };
  //Contar sillas Generales Ocupadas
  function updateSelectedCount() {
    const count = document.getElementById("count");
    const total = document.getElementById("total");
    const seats = document.querySelectorAll(".row .seat:not(.occupied");

    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const seatsIndex = [...selectedSeats].map((seat) =>
      [...seats].indexOf(seat)
    );
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = suma;
    total_reserva += selectedSeatsCount * 500;
    total.innerText = total_reserva;
  }
  //Evento click BSilla
  const selectBSeat = (bseat) => {
    if (localStorage.getItem("#sillasSelected") < 3) {
      // Seat click event
      if (
        bseat.target.classList.contains("bseat") &&
        !bseat.target.classList.contains("occupied")
      ) {
        bseat.target.classList.toggle("selected");
        suma += 1;
        localStorage.setItem("#sillasSelected", suma);
      }
      updateSelectedBCount();
    } else return console.log("No es permitido más de 3 asientos");
  };

  // Contar Bsillas Ocupadas
  function updateSelectedBCount() {
    const count = document.getElementById("count");
    const total = document.getElementById("total");
    const seats = document.querySelectorAll(".row .bseat:not(.occupied");

    const selectedBSeats = document.querySelectorAll(".row .bseat.selected");
    const selectedBSeatsCount = selectedBSeats.length;
    const seatsIndex = [...selectedBSeats].map((seat) =>
      [...seats].indexOf(seat)
    );

    localStorage.setItem("selectedBSeats", JSON.stringify(seatsIndex));

    count.innerText = suma;
    total_reserva += selectedBSeatsCount * 1000;
    total.innerText = total_reserva;
  }
  function getBack() {
    window.location.href = "/";
  }

  // get data from localstorage and populate ui
  /*function populateUI() {

    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add("selected");
        }
      });
    }
  }*/

  return (
    <div className="seats">
      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small className="showcasetext">N/A</small>
        </li>

        <li>
          <div className="seat selected"></div>
          <small className="showcasetext">Silla General</small>
        </li>

        <li>
          <div className="seat occupied"></div>
          <small className="showcasetext">Silla General Ocupada</small>
        </li>
        <li>
          <div className="bseat "></div>
          <small className="showcasetext">Silla Ejecutiva</small>
        </li>
        <li>
          <div className="bseat occupied"></div>
          <small className="showcasetext">Silla Ejecutiva Ocupada</small>
        </li>
      </ul>

      <div className="container" />
      <div className="row">
        <div onClick={selectBSeat} className="bseat"></div>
        <div onClick={selectBSeat} className="bseat"></div>
        <div onClick={selectBSeat} className="bseat"></div>
        <div onClick={selectBSeat} className="bseat"></div>
      </div>
      <div className="row">
        <div onClick={selectBSeat} className="bseat"></div>
        <div onClick={selectBSeat} className="bseat"></div>
        <div onClick={selectBSeat} className="bseat"></div>
        <div onClick={selectBSeat} className="bseat"></div>
      </div>
      <div className="row">
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
      </div>
      <div className="row">
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
      </div>
      <div className="row">
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
      </div>
      <div className="row">
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
      </div>
      <div className="row">
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
      </div>
      <div className="row">
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
      </div>
      <div className="row">
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
        <div onClick={selectSeat} className="seat"></div>
      </div>

      <p className="text">
        Has seleccionado <span id="count">0</span> asientos por el precio de $
        <span id="total">0</span>
      </p>
      <br></br>
      <button
        type="button"
        onClick={getBack}
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        Regresar
      </button>
    </div>
  );
}

export default Sillas;
