var oceny = document.querySelectorAll('.semester tr')
var sumaOcen = 0
var sumaECTS = 30.0
oceny.forEach(function (x) {
    var ocena1 = x.querySelectorAll('td')[5].innerHTML;
    if (ocena1.length > 3) {
        ocena1 = ocena1.slice(0, 3)
    };
    if (ocena1 == '---') {
        ocena1 = 0.0
    };
    sumaOcen = sumaOcen + (parseFloat(ocena1) * parseFloat(x.querySelectorAll('td')[7].innerHTML))
});
console.log('srednia wazona ocen z ECTS:', sumaOcen / sumaECTS)