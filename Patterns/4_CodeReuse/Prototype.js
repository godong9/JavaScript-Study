/**
 * 프로토타입을 활용한 상속
 *
 * - ECMAScript 5에서 Object.create()로 프로토타입을 활용한 상속 패턴 지원
 */
// 상속해줄 객체
var parent = {
  name: "Pap"
};

// 새로운 객체
var child = object(parent);

// 테스트
console.log(child.name); // "Papa"


function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}


// 부모 생성자
function Person() {
  // 부모 생성자 자신의 프로퍼티
  this.name = "Adam";
}
// 프로토타입에 추가된 프로퍼티
Person.prototype.getName = function () {
  return this.name;
};

// Person 인스턴스 생성
var papa = new Person();

// 이 인스턴스를 상속
var kid = object(papa);
console.log(kid.getName()); // "Adam"


// 프로토타입 객체만 상속

// 부모 생성자
function Person() {
  // 부모 생성자 자신의 프로퍼티
  this.name = "Adam";
}
// 프로토타입에 추가된 프로퍼티
Person.prototype.getName = function () {
  return this.name;
};

// 이 인스턴스를 상속
var kid = object(Person.prototype);

console.log(typeof kid.getName); // "function"
console.log(typeof kid.name); // "undefined"


// ECMAScript 5에서 Object.create()로 프로토타입을 활용한 상속 패턴 지원
var child = Object.create(parent, {
  age: { value: 2 }
});
console.log(child.hasOwnProperty("age")); // true

