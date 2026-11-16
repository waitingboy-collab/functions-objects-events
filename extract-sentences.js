/*
 * Задача 5: Extract Sentences
 *
 * Условие:
 *   splitSentences(text, callback) обхожда текста буква по буква с for-of
 *   и натрупва текущото изречение. Когато срещне ".", "!" или "?",
 *   изречението е завършено: премахва празните места в краищата (trim)
 *   и извиква callback(sentence).
 *
 * Примерен вход:
 *   splitSentences(
 *     "I am the first sentence. Am I the second sentence? I am the third sentence!",
 *     (sentence) => console.log(sentence)
 *   )
 *
 * Очакван изход:
 *   I am the first sentence.
 *   Am I the second sentence?
 *   I am the third sentence!
 */

function splitSentences(text, callback) {
  let sentence = ""; // тук натрупваме буквите на текущото изречение

  for (const char of text) {
    sentence += char;

    if (char === "." || char === "!" || char === "?") {
      // Изречението е завършено → подаваме го на callback функцията
      callback(sentence.trim());
      sentence = ""; // започваме ново изречение
    }
  }
}

// Тест от примера: callback-ът е анонимна arrow функция, която отпечатва
splitSentences(
  "I am the first sentence. Am I the second sentence? I am the third sentence!",
  (sentence) => console.log(sentence)
);
