// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromDollarToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function(){

    // Uso la función como debe ser usada
    const dollar = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la plrueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("One dollar should be 156.5 yen", function(){
    const yen = fromDollarToYen(5.5);
    const expected = 5.5 * 156.5;
    expect(fromDollarToYen(5.5)).toBe(860.75);
})

test("One dollar should be 0.87 pound", function(){
    const pound = fromDollarToPound(50);
    const expected = 50 * 0.87;
    expect(fromDollarToPound(50)).toBe(43.50)
})