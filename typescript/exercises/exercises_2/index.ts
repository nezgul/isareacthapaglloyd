/**

Ćwiczenie 2

Uzupełnij treść poniższych funkcji wraz z ich typowaniem. Pamiętaj o zmianie typowań `unknown`.
*/

const cars: unknown[] = [
  {
    model: 'Q7',
    brand: 'Audi',
    year: 2004,
  },
  {
    model: '320',
    brand: 'BMW',
    year: 1992,
  },
  {
    model: '6',
    brand: 'Mazda',
    year: 2018,
  },
];

function carsAfter2000(cars: unknown): unknown {
  return cars.filter((car) => car.year > 2000);
}

const newCars = carsAfter2000(cars);
