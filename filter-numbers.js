/*
 * Задача 4: Filter Numbers
 *
 * Условие:
 *   filterNumbers(...nums) отпечатва на отделен ред всяко число,
 *   което отговаря едновременно на трите условия:
 *     1) сборът от цифрите му е 10
 *     2) съдържа цифрата 5
 *     3) има поне 3 цифри
 *   Отрицателните числа се проверяват по абсолютна стойност (-415 минава),
 *   но се отпечатват със знака си.
 *   Предикатите са вътрешни arrow функции:
 *     sumOfDigitsIs10, containsDigit5, hasAtLeast3Digits, combinedFilters
 *
 * Примерен вход:
 *   filterNumbers(253, 75, -415, 198, 532, 38)
 *
 * Очакван изход:
 *   253
 *   -415
 *   532
 */

function filterNumbers(...nums) {
  // Помощна функция: масив от цифрите (като текст) на абсолютната стойност
  const digitsOf = (num) => String(Math.abs(num)).split("");

  // Предикат = функция, която връща true или false
  const sumOfDigitsIs10 = (num) =>
    digitsOf(num).reduce((sum, digit) => sum + Number(digit), 0) === 10;

  const containsDigit5 = (num) => digitsOf(num).includes("5");

  const hasAtLeast3Digits = (num) => digitsOf(num).length >= 3;

  // Комбиниран предикат: && изисква и трите условия да са изпълнени
  const combinedFilters = (num) =>
    sumOfDigitsIs10(num) && containsDigit5(num) && hasAtLeast3Digits(num);

  // filter получава предиката като callback; forEach отпечатва всяко число
  nums.filter(combinedFilters).forEach((num) => console.log(num));
}

// Тест от примера
filterNumbers(253, 75, -415, 198, 532, 38);
