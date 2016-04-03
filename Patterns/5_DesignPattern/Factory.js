/**
 * 팩토리(Factory)
 *
 * - 비슷한 객체를 생성하는 반복 작업을 수행
 * - 사용자가 구체적인 타입(클래스를 모르고도 객체를 생성할 수 있게 해줌
 */
// 부모 생성자
function CarMaker() {}

// 부모의 메서드
CarMaker.prototype.drive = function () {
  return "Vroom, I have " + this.doors + " doors";
};

// 스태틱 factory 메서드
CarMaker.factory = function (type) {
  var constr = type,
      newcar;

  // 생성자가 존재하지 않으면 에러를 발생
  if (typeof CarMaker[constr] !== "function") {
    throw {
      name: "Error",
      message: constr + " doesn't exist"
    };
  }

  // 생성자의 존재를 확인했으므로 부모를 상속
  // 상속은 단 한번만 실행하도록 한다
  if (typeof CarMaker[constr].prototype.drive !== "function") {
    CarMaker[constr].prototype = new CarMaker();
  }

  // 새로운 인스턴스를 생성
  newcar = new CarMaker[constr]();

  // 다른 메서드 호출이 필요하면 여기서 실행한 후, 인스턴스를 반환
  return newcar;
};

// 구체적인 자동차 메이커들을 선언
CarMaker.Compact = function() {
  this.doors = 4;
};
CarMaker.Convertible= function() {
  this.doors = 2;
};
CarMaker.SUV = function () {
  this.doors = 24;
};

var corolla = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');
console.log(corolla.drive()); // "Vroom, I have 4 doors"
console.log(solstice.drive()); // "Vroom, I have 2 doors"
console.log(cherokee.drive()); // "Vroom, I have 24 doors"


// 내장 객체 팩토리
var o = new Object(),
    n = new Object(1),
    s = Object('1'),
    b = Object(true);

console.log(o.constructor === Object); // true
console.log(n.constructor === Number); // true
console.log(s.constructor === String); // true
console.log(b.constructor === Boolean); // true






