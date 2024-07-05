// Seleccionar todos los elementos con el atributo data-id
const seats = document.querySelectorAll("[data-id]");
const purchaseButton = document.getElementById("purchase-button");

// Inicializar los asientos desde localStorage
document.addEventListener("DOMContentLoaded", () => {
    const savedSeats = JSON.parse(localStorage.getItem("seats")) || {};

    seats.forEach(seat => {
        const seatId = seat.getAttribute("data-id");
        if (savedSeats[seatId]) {
            seat.className = savedSeats[seatId];
        }
    });
});

// Añadir eventos de clic a los asientos
seats.forEach(seat => {
    seat.addEventListener("click", () => {
        const seatId = seat.getAttribute("data-id");

        // Si el asiento está vendido (rojo), no se puede seleccionar
        if (seat.classList.contains("sold")) {
            return;
        }

        // Alternar entre seleccionado (amarillo) y disponible (gris)
        if (seat.classList.contains("selected")) {
            seat.classList.remove("selected");
            seat.classList.add("available");
        } else {
            seat.classList.remove("available");
            seat.classList.add("selected");
        }
    });
});

// Manejar la compra de asientos seleccionados
purchaseButton.addEventListener("click", () => {
    const selectedSeats = [];
    seats.forEach(seat => {
        if (seat.classList.contains("selected")) {
            selectedSeats.push(seat);
        }
    });

    // Aquí iría la lógica de pago

    // Después de una compra exitosa, marcar los asientos seleccionados como vendidos
    selectedSeats.forEach(seat => {
        seat.classList.remove("selected");
        seat.classList.add("sold");
    });

    // Guardar el estado de los asientos en localStorage
    saveSeatsState();
});

// Guardar el estado de los asientos en localStorage
function saveSeatsState() {
    const seatStates = {};
    seats.forEach(seat => {
        const seatId = seat.getAttribute("data-id");
        if (seat.classList.contains("available")) {
            seatStates[seatId] = "available";
        } else if (seat.classList.contains("selected")) {
            seatStates[seatId] = "selected";
        } else if (seat.classList.contains("sold")) {
            seatStates[seatId] = "sold";
        }
    });
    localStorage.setItem("seats", JSON.stringify(seatStates));
}
