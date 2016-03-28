/**
 * 스태틱 프로퍼티와 메서드: 인스턴스에 따라 달라지지 않는 프로퍼티와 메서드
 */

// 공개 스태틱 멤버: 생성자에 프로퍼티를 추가함으로써 구현 가능
var Gadget = function () {};

// 스태틱 메서드
Gadget.isShiny = function () {
  return "you bet";
};

// 프로토타입에 일반적인 함수 추가
Gadget.prototype.setPrice = function (price) {
  this.price = price;
};

// 스태틱 메서드를 인스턴스를 통해 호출했을 때도 동작 가능하도록 프로토타입에 추가
Gadget.prototype.isShiny = Gadget.isShiny;

// 스태틱 메서드 호출
Gadget.isShiny(); // "you bet"


// 스태틱 / 스태틱 아닐 때 구분해서 동작하는 예제

// 생성자
var Gadget = function (price) {
  this.price = price;
};

// 스태틱 메서드
Gadget.isShiny = function () {
  // 다음은 항상 동작
  var msg = "you bet";

  // 스태틱하지 않은 방식으로 호출되었을 때
  if (this instanceof Gadget) {
    msg += ", it costs $" + this.price + "!";
  }

  return msg;
};

// 프로토타입에 스태틱 메서드 추가
Gadget.prototype.isShiny = function() {
  return Gadget.isShiny.call(this);
};

Gadget.isShiny(); // "you bet"

var a = new Gadget('499.99');
a.isShiny(); // "you bet, it costs $499.99!"


// 비공개 스태틱 멤버
var Gadget = (function () {
  // 스태틱 변수/프로퍼티
  var counter = 0,
      NewGadget;

  NewGadget = function () {
    counter += 1;
  };

  // 특권 메서드
  NewGadget.prototype.getLastId  = function () {
    return counter;
  };

  // 생성자를 덮어씀
  return NewGadget;
}()); // 즉시 실행

var iphone = new Gadget();
iphone.getLastId(); // 1
var ipod = new Gadget();
ipod.getLastId(); // 2
var ipad = new Gadget();
ipad.getLastId(); // 3

