/**
 * 객체 리터럴, 생성자 함수
 */
// 빈 객체 생성
var dog = {};

// 프로퍼티 하나 추가
dog.name = "Benji";

// 메서드 추가
dog.getName = function () {
  return dog.name;
};

// 메서드 재정의
dog.getName = function () {
  return "Fido";
};

// 프로퍼티나 메서드 삭제
delete dog.name;

// 생성 시점에 프로퍼티와 메서드 추가
var dog = {
  name: "Benji",
  getName: function () {
    return this.name;
  }
};

// 생성자 함수
var Person = function (name) {
  this.name = name;
  this.say = function () {
    return "I am " + this.name;
  };
};

// 위의 코드와 동일한 역할
var Person = function (name) {
  var this = Object.create(Person.prototype);

  this.name = name;
  this.say = function () {
    return "I am " + this.name;
  };

  return this;
};

var adam = new Person("Adam");
adam.say();


// 생성자의 반환값. 반환 값이 될 객체를 따로 정할 수 있음.
var Objectmarker = function () {
  this.name = "This is it";

  var that = {};
  that.name = "And that's that";
  return that;
};

// 스스로를 호출하는 생성자
function Waffle() {
  if (!(this instanceof Waffle)) {
    return new Waffle()
  }

  this.tastes = "yummy";
}

Waffle.prototype.wantAnother = true;

var first = new Waffle(),
  second = Waffle();

console.log(first.tastes);
console.log(second.tastes);
console.log(first.wantAnother);
console.log(second.wantAnother);

