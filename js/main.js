//VARIABILI
const container = document.getElementById("container");


for (let i = 1; i <= 100; i++) {
    
    if (i%3 == 0 && i%5 == 0) {
        console.log("fizzbuzz")
        const nuovoElemento = document.createElement("span");
        nuovoElemento.innerHTML = "fizzbuzz";
        nuovoElemento.classList.add("red")

        container.append(nuovoElemento);

    }else if(i%5 == 0) {
        console.log("buzz")
        const nuovoElemento = document.createElement("span");
        nuovoElemento.innerHTML = "buzz";
        nuovoElemento.classList.add("yellow")

        container.append(nuovoElemento);
    }else if(i%3 == 0){
        console.log("fizz")
        const nuovoElemento = document.createElement("span");
        nuovoElemento.innerHTML = "fizz";
        nuovoElemento.classList.add("acqua")

        container.append(nuovoElemento);
    }else{
        console.log(i)
        const nuovoElemento = document.createElement("span");
        nuovoElemento.innerHTML = i;
        nuovoElemento.classList.add("blue")

        container.append(nuovoElemento);
    }
}

