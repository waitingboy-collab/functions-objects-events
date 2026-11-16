# Functions, Objects & Events

Упражнения от курса **Fundamentals of Programming with AI**: функции, параметри по подразбиране, rest параметри, callbacks, предикати, деструктуриране и събития в JavaScript.

## Демо на живо

| # | Страница | Адрес |
|---|----------|-------|
| 01 | HTML Snippet | https://html-snippet-six.vercel.app |
| 02 | Nearest Point | https://nearest-point.vercel.app/?example |
| 03 | Geo Area | https://geo-area.vercel.app/?example |

С `?example` в адреса страницата се отваря с данните от условието.

## Задачи

| Файл | Функция за Judge | Какво упражнява |
|------|------------------|-----------------|
| `html-snippet.js` | `printAsHTML`, `printHTMLSnippet` | параметри по подразбиране, вътрешни функции |
| `fibonacci.js` | `printFibonacci` | итерация, BigInt (стъпките са във `fibonacci-steps.js`) |
| `sequence-of-operations.js` | `processOperations` | rest параметри, `for-of`, `if-else` |
| `filter-numbers.js` | `filterNumbers` | предикати като arrow функции |
| `extract-sentences.js` | `splitSentences` | callback функции |
| `print-objects.js` | `printPersonInfo` | деструктуриране на вложен обект |
| `nearest-point.js` | `nearestPoint` | деструктуриране + rest, Евклидово разстояние |
| `geo-area.js` | `calculateGeoArea` | площ на сферичен многоъгълник |

## Стартиране

```bash
node fibonacci.js
node fibonacci-steps.js   # рекурсия срещу итерация срещу BigInt, с измерено време
```

HTML страниците са самостоятелни файлове. Отварят се директно в браузъра, без инсталация.

## Публикуване

Всяка HTML страница е отделен проект във Vercel. Папката `vercel/<име>/` съдържа копие на страницата като `index.html`:

```bash
cp nearest-point.html vercel/nearest-point/index.html
cd vercel/nearest-point && vercel deploy --prod
```
