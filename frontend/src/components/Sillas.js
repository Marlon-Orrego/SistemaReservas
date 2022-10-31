import React from "react";
import "../css/sillas.css";

function Sillas() {
  /*
  const container = document.querySelector(".container");
  const seats = document.querySelectorAll(".row .seat:not(.occupied");
  const count = document.getElementById("count");
  const total = document.getElementById("total");

  populateUI();

  // Save selected movie index and price
  function setVueloData(vueloPrice) {
    localStorage.setItem("selectedMoviePrice", vueloPrice);
  }

  // update total and count
  function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const selectedbSeats = document.querySelectorAll(".row .bseat.selected");

    const seatsIndex = [...selectedSeats].map((seat) =>
      [...seats].indexOf(seat)
    );

    const bseatsIndex = [...selectedSeats].map((seat) =>
      [...seats].indexOf(seat)
    );

    localStorage.setItem(
      "selectedSeats",
      JSON.stringify(seatsIndex + bseatsIndex)
    );

    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
  }

  // get data from localstorage and populate ui
  function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add("selected");
        }
      });
    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if (selectedMovieIndex !== null) {
      movieSelect.selectedIndex = selectedMovieIndex;
    }
  }

  // Movie select event
  movieSelect.addEventListener("change", (e) => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
  });

  // Seat click event
  container.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("seat") &&
      !e.target.classList.contains("occupied")
    ) {
      e.target.classList.toggle("selected");

      updateSelectedCount();
    }
  });

  // intial count and total
  updateSelectedCount();*/

  return (
    <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className="seats">
        <ul className="showcase">
          <li>
            <div className="seat"></div>
            <small className="showcasetext">N/A</small>
          </li>

          <li>
            <div className="seat selected"></div>
            <small className="showcasetext">Seleccionada</small>
          </li>

          <li>
            <div className="seat occupied"></div>
            <small className="showcasetext">Ocupada</small>
          </li>
        </ul>

        <div className="container" />
        <div className="row">
          <div className="bseat"></div>
          <div className="bseat"></div>
          <div className="bseat"></div>
          <div className="bseat"></div>
        </div>
        <div className="row">
          <div className="bseat"></div>
          <div className="bseat"></div>
          <div className="bseat"></div>
          <div className="bseat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>

        <p className="text">
          Has seleccionado <span id="count">0</span> asientos por el precio de $
          <span id="total">0</span>
        </p>
        <script src="script.js"></script>
      </body>
    </html>
  );
}

export default Sillas;
