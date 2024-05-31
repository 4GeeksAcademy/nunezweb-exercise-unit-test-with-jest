// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
// module.exports = { sum };

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    //Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar ;
}
// Conversión "fromDollarToYen"
const fromDollarToYen = function(newValueInDollar) {
    let valueInYen = newValueInDollar * 156.5;
    return valueInYen
}

// Conversión "fromYenToPound"
const fromDollarToPound = function(valueInDollarFromPound) {
    let valueInPound = valueInDollarFromPound * 0.87;
    return valueInPound
}

module.exports ={sum, fromEuroToDollar, fromDollarToYen, fromDollarToPound}