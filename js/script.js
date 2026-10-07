//funzioni da implementare

function prezzo() {

    let eta;
    do {
        eta = prompt("inserisci un eta");
        if (eta == null) {
            return;
        }
    } while (isNaN(eta));

    if (eta < 5&& eta > 0) {
        console.log("gratis");
        alert("gratis")
    }

    else if (eta >= 18 && eta <= 25) {
        console.log("3.5€");
        alert("3.5€")
    }
    else if (eta >= 50 && eta <= 55) {
        console.log("5€");
        alert("5€")
    }
    else {
        console.log("8€");
        alert("8€")
    }
}
