/**
 * 비공개 프로퍼티와 메서드
 */

// 비공개 멤버
function Gadget() {
  // 비공개 멤버
  var name = 'iPod';
  // 공개된 함수
  this.getName = function () {
    return name;
  };
}

var toy = new Gadget();

console.log(toy.name); // undefined
console.log(toy.getName());


// 비공개 멤버의 허점
// - 특권(privileged) 메서드에서 비공개 변수의 값을 바로 반환할 경우 이 변수가 객체나 배열이면 값이 아닌 참조가 반환. 외부에서 수정 가능
function Gadget() {
  // 비공개 멤버
  var specs = {
    screen_width: 320,
    screen_height: 480,
    color: "white"
  };

  // 공개 함수
  this.getSpecs = function () {
    return specs;
  };
}

var toy = new Gadget();
var specs = toy.getSpecs();
specs.color = "black"; // 외부에서 수정 가능
specs.price = "free"; // 외부에서 수정 가능

// 이러한 문제를 해결하기 위해 '최소 권한의 원칙(Principle of Least Authority, POLA)'을 적용하거나, 객체의 복사본을 만들어서 전달

/**
 * 객체 리터럴과 비공개 멤버 - 익명 즉시 실행 함수를 만들어 클로저 생성해서 가능
 */
var myobj;
(function() {
  // 비공개 멤버
  var name = "my, oh my";

  // 공개될 부분을 구현
  myobj = {
    // 특권 메서드
    getName: function () {
      return name;
    }
  };
}());

myobj.getName();

var myobj = (function () {
  // 비공개 멤버
  var name = "my, oh my";

  // 공개될 부분을 구현
  return {
    // 특권 메서드
    getName: function () {
      return name;
    }
  };
}());

myobj.getName();


/**
 * 프로토타입과 비공개 멤버 - 동일한 생성자로 생성한 모든 인스턴스가 공통된 부분을 공유. 감춰진 비공개 멤버들도 모든 인스턴스가 공유
 */
function Gadget() {
  // 비공개 멤버
  var name = 'iPod';
  // 공개 함수
  this.getName = function () {
    return name;
  };
}

Gadget.prototype = (function () {
  // 비공개 멤버
  var browser = "Mobile Webkit";
  // 공개된 프로토타입 멤버
  return {
    getBrowser: function () {
      return browser;
    }
  };
}());

var toy = new Gadget();
console.log(toy.getName());
console.log(toy.getBrowser());

