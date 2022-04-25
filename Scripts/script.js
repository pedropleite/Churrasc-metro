// Carne - 400g por pessoa | Se for mais de 6 horas, 650g
// Cerveja - 1200ml por pessoa | Se for mais de 6 horas, 2000ml
//Refrigerante/agua - 1000ml por pessoa | Se for mais de 6 horas, 1500ml
// Crianças valem 0,5.
var carne
var cerveja
var Refrigerante

function teste() {
    let adults = document.getElementById("adults").value
    let kids = document.getElementById("kids").value
    let hours = document.getElementById("hours").value
    if (adults == "") {
        alert("Por favor, insira um número de adultos válido.")
    }
    else if (kids == "") {
        alert("Por favor, insira um número de crianças válido.")
    }
    else if (hours == "" | hours == 0) {
        alert("Por favor, insira um número de horas válido.")
    }
    else {
        calc()
    }
}

function calc() {
    let adults = document.getElementById("adults").value
    let kids = document.getElementById("kids").value
    let hours = document.getElementById("hours").value
    if (hours <= 6) {
        carne = ((400 * adults) + (200 * kids))/1000
        cerveja = (1200 * adults)/1000
        Refrigerante = ((1000 * adults) + (500 * kids))/1000
    }
    else {
        carne = ((650 * adults) + (325 * kids))/1000
        cerveja = (2000 * adults)/1000
        Refrigerante = ((1500 * adults) + (750 * kids))/1000
    }

    
    let div = document.getElementById("result")
    div.style.visibility="visible"
    let h21 = document.createElement("h2")
    let text = document.createTextNode("A quantidade de carnes foi de " + carne + " kilos. 🍖")
    div.appendChild(h21)
    h21.appendChild(text)

    let h22 = document.createElement("h2")
    let text2 = document.createTextNode("A quantidade de cerveja foi de " + cerveja + " litros. 🍺")
    div.appendChild(h22)
    h22.appendChild(text2)

    let h23 = document.createElement("h2")
    let text3 = document.createTextNode("A quantidade de refrigerante foi de " + Refrigerante + " litros. 🍹")
    div.appendChild(h23)
    h23.appendChild(text3)


}

function limpar() {
    document.getElementById("adults").value = ""
    document.getElementById("kids").value = ""
    document.getElementById("hours").value = ""
}

function fechar(){
    document.getElementById("result").style.visibility = "hidden"
    location.reload()
}