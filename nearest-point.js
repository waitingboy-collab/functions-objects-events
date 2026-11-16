/*
 * Задача 7: Nearest Point
 *
 * Условие:
 *   nearestPoint({ locX, locY }, ...points) получава локация и произволен брой
 *   точки { x, y }. Връща точката, която е най-близо до локацията
 *   (Евклидово разстояние). При равни разстояния връща първата от тях.
 *
 *   Евклидово разстояние: d = √((x - locX)² + (y - locY)²)
 *
 * Примерен вход:
 *   nearestPoint({ locX: 10, locY: 20 },
 *                { x: 25, y: 30 }, { x: -5, y: 20 }, { x: 70, y: -10 }, { x: 0, y: 50 })
 *
 * Очакван изход:
 *   { x: -5, y: 20 }
 */

function nearestPoint({ locX, locY }, ...points) {
  // Вътрешна функция: разстояние от локацията до точка p
  const distanceTo = (p) => Math.sqrt((p.x - locX) ** 2 + (p.y - locY) ** 2);

  let nearest = points[0];
  let minDistance = distanceTo(points[0]);

  for (const point of points) {
    const d = distanceTo(point);
    // Строго „<“: при равенство запазваме по-ранната точка
    if (d < minDistance) {
      minDistance = d;
      nearest = point;
    }
  }

  return nearest;
}

// Тест от примера
console.log(nearestPoint({ locX: 10, locY: 20 }, { x: 25, y: 30 }, { x: -5, y: 20 }, { x: 70, y: -10 }, { x: 0, y: 50 }));
