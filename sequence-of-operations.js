/*
 * Задача 3: Sequence of Operations
 *
 * Условие:
 *   processOperations(startValue, ...operations) получава начална стойност
 *   и произволен брой операции (rest параметър). Изпълнява ги последователно:
 *     "double" → умножава по 2
 *     "+1"     → добавя 1
 *     "-1"     → изважда 1
 *     "print"  → отпечатва текущата стойност
 *     "stop"   → спира (останалите операции се игнорират)
 *     друго    → отпечатва "invalid operation"
 *   Използвайте for-of и if-else.
 *
 * Пример 1:
 *   processOperations(20, "+1", "double", "print")
 *   Изход:
 *     42
 *
 * Пример 2:
 *   processOperations(5, "+1", "double", "print", "-1", "-1", "clear",
 *                     "print", "double", "stop", "+1", "print")
 *   Изход:
 *     12
 *     invalid operation
 *     10
 */

function processOperations(startValue, ...operations) {
  // ...operations събира всички останали аргументи в масив
  let value = startValue;

  for (const operation of operations) {
    if (operation === "double") {
      value *= 2;
    } else if (operation === "+1") {
      value += 1;
    } else if (operation === "-1") {
      value -= 1;
    } else if (operation === "print") {
      console.log(value);
    } else if (operation === "stop") {
      break; // излизаме от цикъла – следващите операции не се изпълняват
    } else {
      console.log("invalid operation");
    }
  }
}

// Тестове от примерите
processOperations(20, "+1", "double", "print");
processOperations(5, "+1", "double", "print", "-1", "-1", "clear", "print", "double", "stop", "+1", "print");
