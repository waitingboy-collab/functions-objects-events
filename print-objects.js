/*
 * Задача 6: Print Objects
 *
 * Условие:
 *   printPersonInfo получава обект { name, address: { town, country } }
 *   и връща "I am {name} from {town}, {country}."
 *   Използвайте деструктуриране директно в параметрите на функцията,
 *   включително за вложения обект address.
 *
 * Примерен вход:
 *   printPersonInfo({ name: "Maria", address: { town: "Plovdiv", country: "Bulgaria" } })
 *
 * Очакван изход:
 *   I am Maria from Plovdiv, Bulgaria.
 */

// { name, address: { town, country } } „разопакова“ обекта още при извикването:
// name, town и country стават обикновени локални променливи
function printPersonInfo({ name, address: { town, country } }) {
  return `I am ${name} from ${town}, ${country}.`;
}

// Тест от примера
console.log(printPersonInfo({ name: "Maria", address: { town: "Plovdiv", country: "Bulgaria" } }));
