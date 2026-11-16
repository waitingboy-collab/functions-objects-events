/*
 * Задача 1: HTML Snippet
 *
 * Условие:
 *   а) printAsHTML(text, tag = "div") – връща текста, обграден с HTML таг.
 *      Ако не е подаден таг, се използва "div" (параметър по подразбиране).
 *   б) printHTMLSnippet(title, text) – връща
 *      "<div><h1>title</h1><p>text</p></div>".
 *      printAsHTML е ВЪТРЕШНА функция и се използва и за трите тага.
 *
 * Примерен вход:
 *   printAsHTML("HTML paragraph", "p")
 *   printHTMLSnippet("JavaScript", "JS is a modern language.")
 *
 * Очакван изход:
 *   <p>HTML paragraph</p>
 *   <div><h1>JavaScript</h1><p>JS is a modern language.</p></div>
 */

// а) Самостоятелна функция (за Judge задачата printAsHTML)
function printAsHTML(text, tag = "div") {
  // Шаблонен низ: ${...} вмъква стойността на променливата
  return `<${tag}>${text}</${tag}>`;
}

// б) Главна функция с вътрешна помощна функция (за Judge задачата printHTMLSnippet)
function printHTMLSnippet(title, text) {
  // Вътрешна функция – видима само в printHTMLSnippet
  function printAsHTML(text, tag = "div") {
    return `<${tag}>${text}</${tag}>`;
  }

  const heading = printAsHTML(title, "h1");   // <h1>title</h1>
  const paragraph = printAsHTML(text, "p");   // <p>text</p>
  return printAsHTML(heading + paragraph);    // без таг → "div" по подразбиране
}

// Тестове от примерите
console.log(printAsHTML("HTML paragraph", "p"));
console.log(printHTMLSnippet("JavaScript", "JS is a modern language."));
