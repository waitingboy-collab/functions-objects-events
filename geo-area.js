/*
 * Задача 8: Geo Area
 *
 * Условие:
 *   calculateGeoArea(...coordinates) получава върховете на многоъгълник
 *   като обекти { latitude, longitude } (в градуси) и връща площта му в m²
 *   във формат "Area: X.XX m²".
 *
 *   Приемаме, че Земята е идеална сфера с радиус R = 6371000 m.
 *   Формула за площ на сферичен многоъгълник (ъглите са в радиани):
 *     сума = Σ (lon2 - lon1) * (2 + sin(lat1) + sin(lat2))   за всеки ръб
 *     площ = |сума| * R² / 2
 *   Последният ръб свързва последния връх с първия.
 *
 * Примерен вход:
 *   calculateGeoArea(
 *     { latitude: 42.635912, longitude: 23.369442 },
 *     { latitude: 42.635917, longitude: 23.369905 },
 *     { latitude: 42.636574, longitude: 23.369877 }
 *   )
 *
 * Очакван изход:
 *   Area: 1384.10 m²
 */

function calculateGeoArea(...coordinates) {
  const R = 6371000; // радиус на Земята в метри

  // Вътрешна функция: градуси → радиани
  const toRadians = (degrees) => (degrees * Math.PI) / 180;

  let sum = 0;

  for (let i = 0; i < coordinates.length; i++) {
    const p1 = coordinates[i];
    // % (остатък) връща индекс 0 след последния → затваряме многоъгълника
    const p2 = coordinates[(i + 1) % coordinates.length];

    const lat1 = toRadians(p1.latitude);
    const lat2 = toRadians(p2.latitude);
    const deltaLon = toRadians(p2.longitude - p1.longitude);

    sum += deltaLon * (2 + Math.sin(lat1) + Math.sin(lat2));
  }

  // Math.abs: посоката на обхождане (по/обратно на часовника) влияе само на знака
  const area = (Math.abs(sum) * R * R) / 2;

  return `Area: ${area.toFixed(2)} m²`;
}

// Тест от примера
console.log(calculateGeoArea(
  { latitude: 42.635912, longitude: 23.369442 },
  { latitude: 42.635917, longitude: 23.369905 },
  { latitude: 42.636574, longitude: 23.369877 }
));
