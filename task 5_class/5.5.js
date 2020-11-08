"use strict";

console.log("Задача 5.5");

// класс
// Напиши класс Car с указанными свойствами и методами.


class Car {
 // Write code under this line
  static getSpecs(car){
  return `maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`
  }
  
  
    constructor({ speed=0, price=0, maxSpeed=0, isOn=false, distance=0 } = {}){
  this._speed=speed;
  this._price=price;
  this._maxSpeed=maxSpeed;
  this._isOn=isOn;
  this._distance=distance;
  }
  
  get price() {
  return this._price;
  }
  
  set price(value) {
    this._price=value;
  }
  
  turnOn() {
  this._isOn=true;
  }
  
  turnOff() {
  this._isOn=false;
  this._speed=0;
  }
  
  
  accelerate(value) {
    if ((this._speed+=value)<=this._maxSpeed)
      return this._speed+=value;
  }
  
  
  decelerate(value) {
  if ((this._speed-=value)>=0)
      return this._speed+=value;
  }
  
  drive(hours) {
  if (this._isOn){
  return this._distance+=(hours*this._speed)
  }
    
  }
}
 
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
console.dir(mustang);

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000








// class Car {
//   /*
//    * Добавь `статический` метод
//    * `getSpecs(car)`, который принимает
//    * объект-машину как параметр
//    * и возвращает шаблонную строку
//    * со свойствами и значениями объекта.
//    * Свойства:
//    *   maxSpeed,
//    *   speed,
//    *   isOn,
//    *   distance,
//    *   price
//    * Пример строки, полученной этим методом:
//    * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
//    */

//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость,
//    *          начальное значение `0`
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль.
//    *         Значения `true` или `false`,
//    *         начальное значение false
//    *  distance - пробег в километрах,
//    *             начальное значение `0`
//    */
//   constructor() { }

//   /*
//    * Добавь геттер и сеттер
//    * для свойства `price`, который будет
//    * работать с свойством цены автомобиля.
//    *
//    * ВАЖНО: для записи методов get и set
//    * значение параметра записывают с
//    * подчеркиванием. См. ниже пример 1.
//    */

//   /*
//    * Метод, который заводит автомобиль
//    * Записывает в свойство `isOn` значение `true`
//    */
//   turnOn() { }

//   /*
//    * Метод, чтобы заглушить автомобиль
//    * Этот метод должен записывать
//    * в свойство isOn значение false,
//    * и сбрасывать текущую скорость до 0
//    */
//   turnOff() { }

//   /*
//    * Этот метод должен добавлять
//    * к свойству `speed` полученное
//    * значение, при условии,
//    * что результирующая скорость
//    * не больше чем значение свойства `maxSpeed`
//    */
//   accelerate(value) { }

//   /*
//    * Этот метод должен отнимать
//    * от свойства `speed`
//    * полученное значение, при условии,
//    * что результирующая скорость не меньше 0
//    */

//   decelerate(value) { }

//   /*
//    * Этот метод должен добавлять к свойству
//    * `distance` пробег в километрах,
//    * т.е. hours * speed,
//    * но только в том случае,
//    * если машина заведена!
//    */
//   drive(hours) { }
// }
