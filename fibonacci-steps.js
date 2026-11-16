/*
 * Задача 2: Fibonacci – стъпка по стъпка (учебен файл, НЕ е за Judge)
 *
 *   а) Рекурсивна версия    → измерваме времето за n = 40
 *   б) Итеративна версия    → без рекурсия, с обикновени числа (Number)
 *   в) Итеративна + BigInt  → точен резултат за n = 200 и n = 500
 *
 * Стартиране: node fibonacci-steps.js
 */

// ---------- а) Рекурсивна версия ----------
let calls = 0; // брояч колко пъти е извикана функцията

function fibRecursive(n) {
  calls++;
  if (n <= 1) {
    return 1; // база на рекурсията: fib(0) = fib(1) = 1
  }
  // Всяко извикване поражда ДВЕ нови → броят на извикванията расте експоненциално
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

console.log('===== а) Рекурсивна версия =====');
for (const n of [20, 30, 35, 40]) {
  calls = 0;
  const start = performance.now();
  const result = fibRecursive(n);
  const ms = performance.now() - start;
  console.log(`fib(${n}) = ${result} | извиквания: ${calls.toLocaleString('en-US')} | време: ${ms.toFixed(0)} ms`);
}

// ---------- б) Итеративна версия (Number) ----------
function fibIterative(n) {
  let prev = 1;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    const next = prev + curr; // всяка стойност се изчислява САМО ВЕДНЪЖ
    prev = curr;
    curr = next;
  }
  return curr;
}

console.log('\n===== б) Итеративна версия (Number) =====');
let start = performance.now();
console.log(`fib(40) = ${fibIterative(40)} | време: ${(performance.now() - start).toFixed(3)} ms`);

// Къде Number спира да е точен? Над Number.MAX_SAFE_INTEGER (2^53 - 1)
let firstUnsafe = 0;
while (Number.isSafeInteger(fibIterative(firstUnsafe))) {
  firstUnsafe++;
}
console.log(`Number.MAX_SAFE_INTEGER = ${Number.MAX_SAFE_INTEGER}`);
console.log(`Първото n, за което резултатът вече НЕ е точен: ${firstUnsafe}`);
console.log(`fib(200) с Number = ${fibIterative(200)}  ← приблизително, последните цифри са загубени`);

// ---------- в) Итеративна версия с BigInt ----------
function fibBigInt(n) {
  let prev = 1n; // BigInt литерал
  let curr = 1n;
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}

console.log('\n===== в) Итеративна версия с BigInt =====');
console.log(`fib(200) = ${fibBigInt(200)}`);
const fib500 = fibBigInt(500).toString();
console.log(`fib(500) = ${fib500}`);
console.log(`fib(500) има ${fib500.length} цифри`);

// Проверка: BigInt и Number съвпадат, докато Number е точен
console.log(`\nfib(70) Number = ${fibIterative(70)}, BigInt = ${fibBigInt(70)} → съвпадат: ${BigInt(fibIterative(70)) === fibBigInt(70)}`);
console.log(`fib(200): Number и BigInt съвпадат: ${BigInt(fibIterative(200)) === fibBigInt(200)}`);
