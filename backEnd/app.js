const seats = document.querySelectorAll(".seat");

seats.forEach((seat) => {
    seat.addEventListener("click", (e) => {
        seat.classList.toggle("selected");
        statusSeat();

        if (statusSeat() === true ){
            /**carga formualrio */
        }else{
            alert("la silla no esta disponible");
        }
    });
})

const statusSeat = ()=>{
    const selectedSeats = document.querySelectorAll(".selected");
    const available = document.querySelectorAll("[]");
    const sold = document.querySelectorAll(".sold");

    /** si la silla esta disponible hace esto */
    if (available) {
        
    }else{
        return
    }

    /**si la silla esta selecionada hace esto */
    if (selectedSeats) {
        
    }else{
        return
    }

    /**si la silla esta vendida hace esto */
    if (sold) {
        
    }else{
        return
    }
}