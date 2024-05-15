let prompt = require('prompt-sync')();

// 1. Para a=8 y b=5, encuentra el valor de v = 2 * b + a div 2 + 4 * b mod a.
//     Definición de la función ejer1()
// Función ejer1()
//     a = 8
//     b = 5
//     v = 2 * b + a / 2 + 4 * b % a
//     Imprimir "la respuesta es: " concatenado con v
// FinFuncion
function ejer1() {
    let a = 8;
    let b = 5;
    let v = 2 * b + a / 2 + 4 * b % a;
    console.log("La respuesta es: ", v);
}



// 2. (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
// Función ejer2()
//      Si ((5 + 3 * 2) + 9 > 3 * 5 * 14 % 3) entonces
//          Imprimir "verdadero"
//      Sino
//          Imprimir "falso"
//      Fin Si
// FinFuncion
function ejer2() {
    if ((5 + 3 * 2) + 9 > 3 * 5 * 14 % 3) { 
        console.log("Verdadero");
    } else {
        console.log("Falso");
    }
}



// 3. 2 (4 – 10 + 8)/2 36 *(1/2)
// Función ejer3()
//      resp = 2 * (4 - 10 + 8) / 2 * 36 * (1 / 2)
//      Imprimir "la respuesta es: " concatenado con resp
// FinFuncion
function ejer3() {
    let resp = 2 * (4 - 10 + 8) / 2 * 36 * (1 / 2);
    console.log("la respuesta es: ", resp);
}


//4. 260 / 12 + 54 % 3 – 85 % 7
//Función ejer4()
//    resp = 260 / 12 + 54 % 3 - 85 % 7
//    Imprimir "la respuesta es:  " concatenado con resp
//Fin de la función ejer4
function ejer4() {
    resp = 260 / 12 + 54 % 3 - 85 % 7;
    console.log("la respuesta es:  ", resp);
}


//5. ((8 > 2) | | (932 < 23) ) && 4 == 2
//Función ejer5()
//    Si ((8 > 2) o (932 < 23)) y 4 igual a 2 entonces
//        Imprimir "es verdadero"
//    Sino
//        Imprimir "falso"
//    Fin Si
//FinFuncion
function ejer5() {
    if (((8 > 2) || (932 < 23)) && 4 == 2) { 
        console.log("es verdadero");
    } else {
        console.log("falso");
    }
}


//6. Escribir un algoritmo que lea cuatro números y determine si el numero 1 es la mitad
//del número 2; Y si el numero 3 es divisor del numero4.
//Procedimiento ejer6()
//    num1: entero
//    num2: entero
//    num3: entero
//    num4: entero
//    Escribir "Ingrese un numero:"
//    Leer num1
//    Escribir "Ingrese otro numero:"
//    Leer num2
//    Escribir "Ingrese otro numero:"
//    Leer num3
//    Escribir "Ingrese otro numero:"
//    Leer num4
//    Si (num1 / 2 = num2) Entonces
//        Escribir "el numero 1 es la mitad del numero 2"
//    Sino
//        Escribir "el numero 1 no es la mitad del numero 2"
//    Fin Si
//    Si (num3 MOD num4 = 0) Entonces
//        Escribir "el numero 3 es divisor del numero 4"
//    Sinoe
//        Escribir "el numero 3 no es divisor del numero 4"
//    Fin Si
//Fin Procedimiento
function ejer6() {
    let num1 = parseInt(prompt ("Ingrese un numero: "))
    let num2 = parseInt(prompt ("Ingrese un numero: "))
    let num3 = parseInt(prompt ("Ingrese un numero: "))
    let num4 = parseInt(prompt ("Ingrese un numero: "))
    if (num1 / 2 == num2) {
        console.log("El numero 1 es la mitad del numero 2.");
    } else {
        console.log("El numero 1 no es la mitad del numero 2.");
    }
    if (num3 % num4 == 0) {
        console.log("El numero 3 es divisor del numero 4.");
    } else {
        console.log("El numero 3 no es divisor del numero 4.");
    }
}


// 7. Escribir un algoritmo que lea cuatro números y determine si el numero 1 es divisor
//    del numero3 Y si el numero 2 es el doble del numero4
// Algoritmo ejer7
//     num1, num2, num3, num4: se declaran como números enteros
//     Escribir "Ingrese el primer número: "
//     Leer num1
//     Escribir "Ingrese el segundo número: "
//     Leer num2
//     Escribir "Ingrese el tercer número: "
//     Leer num3
//     Escribir "Ingrese el cuarto número: "
//     Leer num4
//     Si num3 modulo num1 es igual a 0 y num2 es igual a num4 multiplicado por 2 Entonces
//         Escribir "El número 1 es divisor del número 3 y el número 2 es el doble del número 4."
//     Sino Si num3 modulo num1 es igual a 0 Entonces
//         Escribir "El número 1 es divisor del número 3, pero el número 2 no es el doble del número 4."
//     Sino Si num2 es igual a num4 multiplicado por 2 Entonces
//         Escribir "El número 2 es el doble del número 4, pero el número 1 no es divisor del número 3."
//     Sino
//         Escribir "Ni el número 1 es divisor del número 3 ni el número 2 es el doble del número 4."
//     Fin Si
// FinAlgoritmo
function ejer7(){
    let num1 = parseInt(prompt("Ingrese el primer número: "));
    let num2 = parseInt(prompt("Ingrese el segundo número: "));
    let num3 = parseInt(prompt("Ingrese el tercer número: "));
    let num4 = parseInt(prompt("Ingrese el cuarto número: "));
    if (num3 % num1 === 0 && num2 === num4 * 2) {
        console.log("El número 1 es divisor del número 3 y el número 2 es el doble del número 4.");
    } else if (num3 % num1 === 0) {
        console.log("El número 1 es divisor del número 3, pero el número 2 no es el doble del número 4.");
    } else if (num2 === num4 * 2) {
        console.log("El número 2 es el doble del número 4, pero el número 1 no es divisor del número 3.");
    } else {
        console.log("Ni el número 1 es divisor del número 3 ni el número 2 es el doble del número 4.");
    }
}


// 8. Pedir al usuario un número y mostrar si es negativo menor que -20, sino mostrar si
//    es positivo par o impar múltiplo de 7.
// Algoritmo ejer8
//     num: entero
//     Escribir "Ingrese un número: "
//     Leer num
//     Si num es menor que -20 Entonces
//         Escribir "El número ingresado es negativo y menor que -20."
//     Sino Si num es mayor o igual a 0 y num módulo 2 es igual a 0 Entonces
//         Escribir "El número ingresado es positivo y par."
//     Sino Si num es mayor o igual a 0 y num módulo 7 es igual a 0 Entonces
//         Escribir "El número ingresado es positivo e impar y múltiplo de 7."
//     Sino Si num es mayor o igual a 0 Entonces
//         Escribir "El número ingresado es positivo e impar y no es múltiplo de 7."
//     Fin Si
// FinAlgoritmo
function ejer8(){
    let num = parseInt(prompt("Ingrese un número: "));
    if (num < -20) {
        console.log("El número ingresado es negativo y menor que -20.");
    } else if (num >= 0 && num % 2 == 0) {
        console.log("El número ingresado es positivo y par.");
    } else if (num >= 0 && num % 7 == 0) {
        console.log("El número ingresado es positivo e impar y múltiplo de 7.");
    } else if (num >= 0) {
        console.log("El número ingresado es positivo e impar y no es múltiplo de 7.");
    }
}


// 9. Calculadora de sueldo con aumento: Pide al usuario que ingrese su salario actual y el
//    porcentaje de aumento que recibirá. Calcula y muestra el nuevo salario después del
//    aumento.
// Funcion ejer9
//     Definir sueldo Como Entero
//     Escribir "Ingrese su sueldo"
//     Leer sueldo
//     Escribir "Ingrese el porcentaje de aumento de sueldo"
//     Leer aumento
//     aumento = 1 + (aumento / 100.0)
//     sueldo = sueldo * aumento
//     Escribir "Su sueldo ahora es de: $", Redondear(sueldo, 2)
// FinFuncion
function ejer9(){
    let sueldo = parseInt(prompt("Ingrese su sueldo"));
    let aumento = parseInt(prompt("Ingrese el porcentaje de aumento de sueldo"));
    aumento = 1 + aumento / 100;
    sueldo *= aumento;
    console.log("Su sueldo ahora es de: $" + sueldo.toFixed(2));
}


// 10. El banco POO ha decidido aumentar el límite de crédito de las tarjetas de crédito de sus clientes, para esto considera que:
//     Si su cliente tiene tarjeta tipo 1, el aumento será del $100 .
//     Si tiene tipo 2 el aumento será del $200
//     Si tiene tipo 3, el aumento será del $300
//     Para cualquier otro tipo será del 500
//     Se pide realizar un algoritmo que ayude al banco a determinar el nuevo límite de
//     crédito que tendrá una persona en su tarjeta considerando que después del aumento
//     se tendrá que subir 10% adicionales a todas las tarjetas.
// Algoritmo ejer10
//     limiteCredito, aumento, adicionar: se declara como decimales
//     Escribir "Tipo de tarjeta: "
//     Leer tipoTarjeta
//     Escribir "Su tipo de tarjeta es: ", tipoTarjeta
//     Si tipoTarjeta < 1 O tipoTarjeta > 3 Entonces
//         aumento = 500
//     Sino Si tipoTarjeta == 1 Entonces
//         aumento = 100
//     Sino Si tipoTarjeta == 2 Entonces
//         aumento = 200
//     Sino Si tipoTarjeta == 3 Entonces
//         aumento = 300
//     Fin Si
//     limiteCredito = aumento + (aumento * 0.10)
//     Escribir "Su límite de tarjeta es: ", limiteCredito
// FinAlgoritmos
function ejer10(){
    let limiteCredito = 0;
    let aumento = 0;
    let adicional = 0.10;
    let tipoTarjeta = parseInt(prompt("Tipo de targeta: "));
    console.log('Su tipo de tarjeta es: ', tipoTarjeta)
    if (tipoTarjeta < 1 || tipoTarjeta > 3) {
        aumento = 500;
    } else if(tipoTarjeta == 1){
        aumento = 100;
    } else if(tipoTarjeta == 2){
        aumento = 200;
    } else if(tipoTarjeta == 3){
        aumento = 300;
    }
    limiteCredito = aumento + (aumento * adicional);
    console.log(`Su limite de tarjeta es: ${limiteCredito}`)
}


// 11. Pedir al usuario un número y mostrar si es mayor o menor que 10.
// Algoritmo ejer11
//     num: se declara como un número entero
//     Escribir "Ingrese un número: "
//     Leer num
//     Si num es mayor que 10 Entonces
//         Escribir "El número ingresado es mayor que 10."
//     Sino Si num es menor que 10 Entonces
//         Escribir "El número ingresado es menor que 10."
//     Sino
//         Escribir "El número ingresado es igual a 10."
//     Fin Si
// FinAlgoritmo
function ejer11(){
    let num = parseInt(prompt("Ingrese un número: "));
    if (num > 10) {
        console.log("El número ingresado es mayor que 10.");
    } else if (num < 10) {
        console.log("El número ingresado es menor que 10.");
    } else {
        console.log("El número ingresado es igual a 10.");
    }
}


// 12. Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
// Algoritmo ejer12
//     edad: se declara como entero
//     Escribir "Ingrese su edad: "
//     Leer edad
//     Si edad > 18 Entonces
//         Escribir "Usted es mayor de edad."
//     Sino
//         Escribir "Usted es menor de edad."
//     Fin Si
// FinAlgoritmo
function ejer12(){
    let edad = parseInt(prompt('Ingrese su edad: '));
    if (edad > 18){
        console.log('Usted es mayor de edadd.');
    } else{
        console.log('Usted es menor de edad.');
    }
}


// 13. Pedir al usuario un número y mostrar si es par o impar
// Funcion ejer13
//     Definir num Como Entero
//     Escribir "Ingrese un número"
//     Leer num
//     Si num % 2 = 0 Entonces
//         Escribir "El número ", num, " es par"
//     Sino
//         Escribir "El número ", num, " es impar"
//     FinSi
// FinFuncion
function ejer13(){
    let num = parseInt(prompt("Ingrese un número"));
    if (num % 2 === 0) {
        console.log("El número " + num + " es par");
    } else {
        console.log("El número " + num + " es impar");
    }
}


// 14. Solicitar al usuario un número y mostrar si es positivo o negativo.
// Algoritmo ejer14
//     num: se declara como entero
//     Escribir "Ingrese un número: "
//     Leer num
//     Si num es igual a 0 Entonces
//         Escribir num, "es un número neutro."
//     Sino Si num es mayor que 0 Entonces
//         Escribir num, "es un número positivo."
//     Sino
//         Escribir num, "es un número negativo."
//     Fin Si
// FinAlgoritmo
function ejer14(){
    let num = parseInt(prompt('Ingrese un número: '));
    if (num == 0){
        console.log(`${num} es un número neutro`);
    } else if(num > 0){
        console.log('Usted es menor de edad.');
    }
}


// 15. Pedir al usuario dos números y mostrar si son iguales o diferentes.
// Funcion ejer15
//     Definir num1 Como Entero
//     Definir num2 Como Entero
//     Escribir "Ingrese un número"
//     Leer num1
//     Escribir "Ingrese otro número"
//     Leer num2
//     Si num1 = num2 Entonces
//         Escribir "El número ", num1, " es igual, se repite dos veces"
//     Sino
//         Escribir "El número ", num1, " es diferente al número ", num2
//     FinSi
// FinFuncion
function ejer15(){
    let num1 = parseInt(prompt("Ingrese un número"));
    let num2 = parseInt(prompt("Ingrese otro número"));
    if (num1 === num2) {
        console.log("El número " + num1 + " es igual, se repite dos veces");
    } else {
        console.log("El número " + num1 + " es diferente al número " + num2);
    }
}


// 16. Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
// Algoritmo ejer16
//     Escribir "Digite un carácter: "
//     Leer caracter
//     Si caracter es igual a "A" o caracter es igual a "a"
//     caracter es igual a "E" o caracter es igual a "e"
//     caracter es igual a "I" o caracter es igual a "i"
//     caracter es igual a "O" o caracter es igual a "o"
//     caracter es igual a "U" o caracter es igual a "u"
//     Entonces
//         Escribir caracter, "es una vocal."
//     Sino
//         Escribir caracter, "es una consonante."
//     Fin Si
// FinAlgoritmo
function ejer16(){
    let caracter = prompt('Digite un caracter: ');
    if (caracter == "A" || caracter == "a"){
        console.log(`${caracter} es una vocal.`)
    } else if (caracter == "E" || caracter == "e"){
        console.log(`${caracter} es una vocal.`)
    } else if (caracter == "I" || caracter == "i"){
        console.log(`${caracter} es una vocal.`)
    } else if (caracter == "O" || caracter == "o"){
        console.log(`${caracter} es una vocal.`)
    } else if (caracter == "U" || caracter == "u"){
        console.log(`${caracter} es una vocal.`)
    } else{
        console.log(`${caracter} es una consonante.`);
    }
}


// 17. Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el
//     segundo o menor que el segundo
// Funcion ejer17
//     Definir nom1 Como Cadena
//     Definir nom2 Como Cadena
//     Escribir "Ingrese un nombre"
//     Leer nom1
//     Escribir "Ingrese otro nombre"
//     Leer nom2
//     Si nom1 = nom2 Entonces
//         Escribir "El nombre ", nom1, " es igual al nombre ", nom2
//     Sino
//         Si nom1 > nom2 Entonces
//             Escribir "El nombre ", nom1, " es mayor que el nombre ", nom2
//         Sino
//             Escribir "El nombre ", nom1, " es menor que el nombre ", nom2
//         FinSi
//     FinSi
// FinFuncion
function ejer17(){
    let nom1 = prompt("Ingrese un nombre");
    let nom2 = prompt("Ingrese otro nombre");
    if (nom1 === nom2) {
        console.log("El nombre " + nom1 + " es igual al nombre " + nom2);
    } 
    else if (nom1 > nom2) {
        console.log("El nombre " + nom1 + " es mayor que el nombre " + nom2);
    } 
    else {
        console.log("El nombre " + nom1 + " es menor que el nombre " + nom2);
    }
}


// 18. Pedir al usuario un número y mostrar si es múltiplo de 3 y par.
// Algoritmo ejer18
//     numero: se declara como entero
//     Escribir "Ingrese un número: "
//     Leer numero
//     Si numero % 3 es igual a 0 y numero % 2 es igual a 0 Entonces
//         Escribir numero, "es múltiplo de 3 y par."
//     Sino
//         Escribir numero, "no es múltiplo de 3 y par."
//     Fin Si
// FinAlgoritmo
function ejer18() {
    let numero = parseInt(prompt("Ingrese un número: "));
    if (numero % 3 == 0 && numero % 2 == 0) {
        console.log(`${numero} es múltiplo de 3 y par.`);
    } else {
        console.log(`${numero} no es múltiplo de 3 y par.`);
    }
}


// 19. Solicitar al usuario un número y mostrar si es divisible por 2 o impar. 
// Funcion ejer19
//     Definir num Como Entero
//     Escribir "Ingrese un número"
//     Leer num
//     Si num % 2 = 0 Entonces
//         Escribir "El número ", num, " es divisible por 2"
//     Sino
//         Escribir "El número ", num, " es impar"
//     FinSi
// FinFuncion
function ejer19(){
    let num = parseInt(prompt("Ingrese un número"));
    
    if (num % 2 === 0) {
        console.log("El número " + num + " es divisible por 2");
    } else {
        console.log("El número " + num + " es impar");
    }
}


// 20. Pedir al usuario un número y mostrar si es mayor 0 y menor o igual a 100.
// Algoritmo ejer20
//     numero: se declara como un número de punto flotante
//     Escribir "Ingrese un número: "
//     Leer numero
//     Si numero es mayor que 0 y numero es menor o igual a 100 Entonces
//         Escribir numero, "es mayor a 0 y menor o igual a 100."
//     Sino
//         Escribir numero, "no es mayor a 0 y menor o igual a 100."
//     Fin Si
// FinAlgoritmo
function ejer20() {
    let numero = parseFloat(prompt("Ingrese un número: "));

    if (numero > 0 && numero <= 100) {
        console.log(`${numero} es mayor a 0 y menor o igual 100.`);
    } else {
        console.log(`${numero} no es mayor a 0 y menor o igual 100.`);
    }
}


// 21. Solicitar al usuario un número y mostrar si es un número de un solo dígito. 
// Algoritmo ejer21
//     num: se declara como un número entero
//     Escribir "Ingrese un número: "
//     Leer num
//     Si num es mayor o igual a 0 y num es menor que 10 Entonces
//         Escribir "El número ingresado tiene un solo dígito."
//     Sino
//         Escribir "El número ingresado no tiene un solo dígito."
//     Fin Si
// FinAlgoritmo
function ejer21(){
    let num = parseInt(prompt("Ingrese un número: "));
    if (num >= 0 && num < 10) {
        console.log("El número ingresado tiene un solo dígito.");
    } else {
        console.log("El número ingresado no tiene un solo dígito.");
    }
}


// 22. Pedir al usuario el monto total de una factura y el año de la compra. Luego, calcular
//     y mostrar el monto total a pagar incluyendo el IVA. Si el año de la compra es menor
//     al 2024 el porcentaje del IVA es del 12% caso contrario aplicar el IVA del 15%.
// Algoritmo ejer22
//     montoTotalFactura: se declara como un número de punto real
//     añoDeCompra: se declara como un número entero
//     IVA1: se declara como un número de punto real, es el porcentaje del IVA para años anteriores a 2024
//     IVA2: se declara como un número de punto real, es el porcentaje del IVA para años iguales o posteriores a 2024
//     montoTotalPagar: se declara como un número de punto real, es el monto total a pagar incluyendo el IVA
//     Escribir "Ingrese el monto total de la factura: "
//     Leer montoTotalFactura
//     Escribir "Ingrese el año de la compra: "
//     Leer añoDeCompra
//     Si añoDeCompra es menor que 2024 Entonces
//         montoTotalPagar = montoTotalFactura + (montoTotalFactura * IVA1)
//     Sino
//         montoTotalPagar = montoTotalFactura + (montoTotalFactura * IVA2)
//     Fin Si
//     Escribir "El monto total a pagar incluyendo IVA es de", montoTotalPagar
// FinAlgoritmo
function ejer22(){
    let montoTotalFactura = parseFloat(prompt('Ingrese el monto total de la factura: '));
    let añoDeCompra = parseInt(prompt('Ingrese el año de la compra: '));
    let IVA1 = 0.12;
    let IVA2 = 0.15;
    let montoTotalPagar = 0;
    if (añoDeCompra < 2024){
        montoTotalPagar = montoTotalFactura + (montoTotalFactura * IVA1);
    } else{
        montoTotalPagar = montoTotalFactura + (montoTotalFactura * IVA2);
    }
    console.log(`EL monto total a pagar incluyendo IVA es de ${montoTotalPagar}`);
}


// 23. Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado.
//     Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el
//     precio sea mayor $100.
// Funcion ejer23
//     Definir producto Como Real
//     Definir porcentaje Como Real
//     Escribir "Ingrese el precio del producto"
//     Leer producto
//     Escribir "Ingrese el porcentaje de descuento"
//     Leer porcentaje
//     porcentaje = 1 + (porcentaje / 100.0)
//     Si producto > 100 Entonces
//         producto = producto * porcentaje
//         Escribir "El total con el descuento es de: ", Redondear(producto, 2)
//     Sino
//         Escribir "El precio del producto no está disponible para aplicar un descuento."
//         Escribir "El precio del producto es de: ", Redondear(producto, 2)
//     FinSi
// FinFuncion
function ejer23() {
    let producto = parseInt(prompt("Ingrese el precio del producto"));
    let porcentaje = parseInt(prompt("Ingrese el porcentaje de descuento"));
    porcentaje = 1 + porcentaje / 100;
    if (producto > 100) {
        producto *= porcentaje;
        console.log("El total con el descuento es de: " + producto.toFixed(2));
    } else {
        console.log("El precio del producto no está disponible para aplicar un descuento.");
        console.log("El precio del producto es de: " + producto.toFixed(2));
    }
}


// 24. Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado,
//     considerando que la nota mínima de aprobación es 60 puntos. Si la nota es mayor a
//     40 y menor a 60 se queda para recuperación caso contario pierde la materia.
// Algoritmo ejer24
//     notaExamen: se declara como un número real
//     Escribir "Ingrese su nota en el examen: "
//     Leer notaExamen
//     Si notaExamen es mayor o igual a 60 Entonces
//         Escribir "Usted está aprobado."
//     Sino Si notaExamen es mayor o igual a 40 Entonces
//         Escribir "Usted está en recuperación."
//     Sino
//         Escribir "Usted está reprobado."
//     Fin Si
// FinAlgoritmo
function ejer24(){
    let notaExamen = parseFloat(prompt("Ingrese su nota en el examen: "));

    if (notaExamen >= 60){
        console.log(`Usted está aprovado`);
    } else if (notaExamen >= 40){
        console.log(`Usted está en recuperación`);
    } else{
        console.log('Usted está reprovado')
    }
}


// 25. Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación.
//     Si el año de fabricación está entre el 2020 y 2023, aplicar un descuento del 5% sobre
//     el precio de venta. mostrar el precio final incluyendo el 15% del IVA.
// Funcion ejer25
//     Definir precio Como Real
//     Definir año Como Entero
//     Escribir "Ingrese el precio del vehículo"
//     Leer precio
//     Escribir "Ingrese el año del vehículo"
//     Leer año
//     Si año >= 2020 Y año <= 2023 Entonces
//         Definir descuento Como Real
//         descuento = 0.05 * precio
//         precio = precio - descuento
//     FinSi
//     Definir iva Como Real
//     iva = 0.15 * precio
//     precio = precio + iva
//     Escribir "El precio final del vehículo es de: ", Redondear(precio, 2)
// FinFuncion
function ejer25() {
    let precio = parseFloat(prompt("Ingrese el precio del vehículo"));
    let año = parseInt(prompt("Ingrese el año del vehículo"));
    if (año >= 2020 && año <= 2023) {
        let descuento = 0.05 * precio;
        precio -= descuento;
    }
    let iva = 0.15 * precio;
    precio += iva;
    console.log("El precio final del vehículo es de: " + precio.toFixed(2));
}


// 26. Pide al usuario el precio de un artículo y el porcentaje de impuesto de ventas aplicado
//     en su región. Si el precio del artículo supera los $200, aplica el impuesto de ventas,
//     de lo contrario, no se aplica impuesto. Calcula y muestra el precio final luego de
//     aplicar el impuesto.
// Algoritmo ejer26
//     precioArticulo: se declara como un número real, representa el precio inicial del artículo
//     porcentajeImpuesto: se declara como un número real, representa el porcentaje de impuesto de ventas de la región del usuario
//     Escribir "Ingrese el precio del artículo: "
//     Leer precioArticulo
//     Escribir "Ingrese el porcentaje de impuesto de su región: "
//     Leer porcentajeImpuesto
//     porcentajeImpuesto = porcentajeImpuesto / 100
//     Si precioArticulo es mayor que 200 Entonces
//         precioArticulo = precioArticulo + (precioArticulo * porcentajeImpuesto)
//     Fin Si
//     Escribir "Su precio del artículo es:", precioArticulo
// FinAlgoritmo
function ejer26(){
    let precioArticulo = parseFloat(prompt('Ingrese el precio del articulo (Ej: 12 o 12.30): '));
    let porcentajeImpuesto = parseInt(prompt('Ingrese el porcentaje de impuesto de su región (numero entero %): '));
    porcentajeImpuesto = porcentajeImpuesto / 100;
    if (precioArticulo > 200){
        precioArticulo = precioArticulo + (precioArticulo * porcentajeImpuesto)
    }
    console.log(`Su precio del articulo es: ${precioArticulo}`);
}


// 27. Solicita al usuario su sueldo actual y el porcentaje de incremento salarial anual. Si el
//     sueldo actual es menor que 500, aplica el incremento del 5%, de lo contrario, no
//     aplica ningún incremento. Calcula y muestra el sueldo esperado con el incremento
//     aplicado.
// Funcion ejer27
//     Definir sueldo Como Real
//     Definir incrementoAnual Como Real
//     Escribir "Ingrese su sueldo actual"
//     Leer sueldo
//     Escribir "Ingrese el porcentaje de incremento salarial anual"
//     Leer incrementoAnual
//     Si sueldo < 500 Entonces
//         sueldo = sueldo * (1 + (incrementoAnual / 100))
//     FinSi
//     Escribir "Sueldo esperado con el incremento aplicado: $", Redondear(sueldo, 2)
// FinFuncion
function ejer27() {
    let sueldo = parseInt(prompt("Ingrese su sueldo actual"));
    let incrementoAnual = parseFloat(prompt("Ingrese el porcentaje de incremento salarial anual"));
    if (sueldo < 500) {
        sueldo *= (1 + (incrementoAnual / 100));
    }
    console.log("Sueldo esperado con el incremento aplicado: $" + sueldo.toFixed(2));
}


//    28. Pide al usuario el precio total de una compra en una tienda en línea y el cupón de
//        descuento a aplicar en porcentaje. Si el precio total de la compra supera los $10,
//        aplica el descuento, de lo contrario, no aplica ningún descuento. Calcula y muestra el
//        monto final con el descuento con el IVA del 15%.
// Funcion ejer28
//     Definir compra Como Real
//     Definir descuento Como Real
//     Escribir "Ingrese el precio total de las compras:"
//     Leer compra
//     Escribir "Ingrese el descuento de su cupón:"
//     Leer descuento
//     Si compra > 10 Entonces
//         descuento = 1 + (descuento / 100)
//         compra = compra * descuento
//     FinSi
//     Definir iva Como Real
//     iva = 0.15
//     Definir montoIva Como Real
//     montoIva = compra * iva
//     Definir compraTotal Como Real
//     compraTotal = compra + montoIva
//     Escribir "El precio total de las compras es de: $", Redondear(compraTotal, 2)
// FinFuncion
function ejer28() {
    let compra = parseInt(prompt("Ingrese el precio total de las compras:"));
    let descuento = parseInt(prompt("Ingrese el descuento de su cupón:"));
    if (compra > 10) {
        descuento = 1 + descuento / 100;
        compra *= descuento;
    }
    let iva = 0.15;
    let montoIva = compra * iva;
    let compraTotal = compra + montoIva;
    console.log("El precio total de las compras es de: $" + compraTotal.toFixed(2));
}


// 29. Pide al usuario su salario actual y la cantidad de años de antigüedad. Calcule el valor
//     del bono de antigüedad del empleado aplicando el 3% del salario por el número de
//     años de antigüedad siempre y cuando supere los 3 años, caso contrario el bono de
//     antigüedad es de cero. Se pide mostrar el salaria y el bono de antigüedad
// Funcion ejer29
//     Definir salario Como Real
//     Definir años Como Entero
//     Escribir "Ingrese su salario actual:"
//     Leer salario
//     Escribir "Ingrese la cantidad de años de antigüedad:"
//     Leer años
//     Definir bono Como Real
//     bono = 0
//     Si años > 3 Entonces
//         bono = salario * 0.03 * años
//     FinSi
//     Escribir "Salario actual: $", Redondear(salario, 2)
//     Escribir "Bono de antigüedad: $", Redondear(bono, 2)
// FinFuncion
function ejer29() {
    let salario = parseFloat(prompt("Ingrese su salario actual:"));
    let años = parseInt(prompt("Ingrese la cantidad de años de antigüedad:"));
    let bono = 0;
    if (años > 3) {
        bono = salario * 0.03 * años;
    }
    console.log("Salario actual: $" + salario.toFixed(2));
    console.log("Bono de antigüedad: $" + bono.toFixed(2));
}


// 30. Pide al usuario el total de su cuenta en un restaurante y el porcentaje de descuento
//     que ofrece por ser cliente frecuente. Si el total de la cuenta supera los $70, aplica el
//     descuento por fidelidad, de lo contrario, no se aplica ningún descuento. Calcula y
//     muestra el monto final con el descuento aplicado más el IVA del 15%.
// Algoritmo ejer30
//     totalCuentaRes: se declara como un número real.
//     porcentajeDescuento: se declara como un número real.
//     Escribir "Ingrese el total de su cuenta: "
//     Leer totalCuentaRes
//     Escribir "Ingrese el porcentaje de descuento: "
//     Leer porcentajeDescuento
//     porcentajeDescuento = porcentajeDescuento / 100
//     Si totalCuentaRes es mayor que 70 Entonces
//         totalCuentaRes = totalCuentaRes - (totalCuentaRes * porcentajeDescuento)
//     Fin Si
//     totalCuentaRes = totalCuentaRes * 0.15
//     Escribir "Su monto final es de:", totalCuentaRes
// FinAlgoritmo
function ejer30(){
    let totalCuentaRes = parseFloat(prompt('Ingrese el total de su cuenta: '));
    let porcentajeDescuento = parseFloat(prompt('Ingrese el porcentaje de descuento: '));
    porcentajeDescuento = porcentajeDescuento / 100;
    if (totalCuentaRes > 70){
        totalCuentaRes = totalCuentaRes - (totalCuentaRes * porcentajeDescuento);
        totalCuentaRes = totalCuentaRes * 0.15;
    } else{
        totalCuentaRes = totalCuentaRes * 0.15;
    }
    console.log(`Su monto final es de: ${totalCuentaRes}`);
}


// ejer1();
// ejer2();
// ejer3();
// ejer4();
// ejer5();
// ejer6();
// ejer7();
// ejer8();
// ejer9();
// ejer10();
// ejer11();
// ejer12();
// ejer13();
// ejer14();
// ejer15();
// ejer16();
// ejer17();
// ejer18();
// ejer19();
// ejer20();
// ejer21();
// ejer22();
// ejer23();
// ejer24();
// ejer25();
// ejer26();
// ejer27();
// ejer28();
// ejer29();
ejer30();