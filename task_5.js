/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение. */
"use strict";
/**
 * функция получает два числа и осуществляет над ними математическую операцию.
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation 
 * @returns {number}
 */    
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'addition':
            return addition(arg1, arg2);
        case 'subtraction':
            return subtraction(arg1, arg2);
        case 'multiplication':
            return multiplication(arg1, arg2);
        case 'division':
            return division(arg1, arg2);
    }    
}
/**
 * функция складываем параметр a и b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function addition(a, b) {
    return a + b;
}
/**
 * функция вычитает из параметр a параметр b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function subtraction(a, b) {
    return a - b;
}
/**
 * функция умножает параметр a на b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function multiplication(a, b) {
    return a * b;
}
/**
 * функция выполняет деление параметра a на b
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function division(a, b) {
    return a / b;
}
alert(`сложения: ${mathOperation(3, 4, 'addition')}`);
alert(`вычитания: ${mathOperation(5, 3, 'subtraction')}`);
alert(`умножения: ${mathOperation(3, 3, 'multiplication')}`);
alert(`деления: ${mathOperation(10, 2, 'division')}`);