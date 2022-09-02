 function calculaRaio() {
    var raio = parseInt(document.getElementById("raio").value);

    var pi = 3.1415

    var area = pi * (raio * raio);

    console.log(area)

    document.getElementById("resposta").innerHTML = area;
 }