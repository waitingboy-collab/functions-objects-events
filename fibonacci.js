/*
 * Задача 2: Fibonacci (финална версия за Judge)
 *
 * Условие:
 *   Числата на Фибоначи се дефинират така:
 *     fib(0) = 1, fib(1) = 1, fib(n) = fib(n-1) + fib(n-2)
 *   Напишете printFibonacci(n), която отпечатва "Fib(n) = X".
 *   fibonacci е вътрешна функция на printFibonacci.
 *
 * Примерен вход → очакван изход:
 *   printFibonacci(5)  → Fib(5) = 8
 *   printFibonacci(0)  → Fib(0) = 1
 *   printFibonacci(15) → Fib(15) = 987
 *
 * Тази версия е итеративна (бърза) и използва BigInt (точна за големи n).
 * Стъпките а), б) и в) са показани във fibonacci-steps.js.
 */

function printFibonacci(n) {
  // Вътрешна функция: итеративно изчисление с BigInt
  function fibonacci(n) {
    let prev = 1n; // fib(0); суфиксът n прави числото BigInt
    let curr = 1n; // fib(1)

    for (let i = 2; i <= n; i++) {
      // Едновременно присвояване чрез деструктуриране на масив:
      // новото prev е старото curr, новото curr е сборът им
      [prev, curr] = [curr, prev + curr];
    }

    return curr; // при n = 0 и n = 1 цикълът не се изпълнява → 1n
  }

  // В шаблонен низ BigInt се отпечатва без суфикса "n"
  console.log(`Fib(${n}) = ${fibonacci(n)}`);
}

// Тестове от примерите
printFibonacci(5);
printFibonacci(0);
printFibonacci(15);
