export default function cargarPropiedades() {
  const container = document.querySelector(".container");
  const seats = document.querySelectorAll(".row .seat:not(.occupied");
  console.log(seats);
  const count = document.getElementById("count");
  const total = document.getElementById("total");

  populateUI();
  let ticketPrice = 500;

  // update total and count
  function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
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
  }

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
  updateSelectedCount();
}
