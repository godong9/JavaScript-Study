/**
 * 싱글톤(Singleton)
 *
 * - 특정 클래스의 인스턴스를 오직 하나만 유지
 * - 자바스크립트에서 새로운 객체를 만들면 다른 어떤 객체와도 같지 않기 때문에 이미 싱글톤
 */
// new 사용하기 - 동일한 생성자로 new를 사용하여 여러 개의 객체를 만들 경우, 실제로는 동일한 객체에 대한 새로운 포인터 반환하도록 구현
var uni = new Universe();
var uni2 = new Universe();
console.log(uni === uni2); // true

// 스태틱 프로퍼티에 인스턴스 저장하기
function Universe() {
  // 이미 instance 존재하는가?
  if (typeof Universe.instance === "object") {
    return Universe.instance;
  }
  // 정상적으로 진행
  this.start_time = 0;
  this.bang = "Big";

  // 인스턴스를 캐시
  Universe.instance = this;

  // 함축적인 반환
  return this;
}

var uni = new Universe();
var uni2 = new Universe();
console.log(uni === uni2); // true


// 클로저에 인스턴스 저장하기
// Universe의 프로토타입에 무언가를 추가해도 생성된 인스턴스에 적용되지 않음
function Universe() {
  // 캐싱된 인스턴스
  var instance = this;

  // 정상적으로 진행
  this.start_time = 0;
  this.bang = "Big";

  // 생성자를 재작성
  Universe = function () {
    return instance;
  };
}

var uni = new Universe();
var uni2 = new Universe();
console.log(uni === uni2); // true

// 프로토타입 적용되도록 수정
function Universe() {
  // 캐싱된 인스턴스
  var instance;

  // 생성자를 재작성
  Universe = function Universe() {
    return instance;
  };

  // 프로토타입 프로퍼티 변경
  Universe.prototype = this;

  // instance
  instance = new Universe();

  // 생성자 포인터를 재지정
  instance.constructor = Universe;

  // 정상적으로 진행
  this.start_time = 0;
  this.bang = "Big";

  return instance;
}

// 프로토타입 갱신 후 인스턴스 만듦
Universe.prototype.nothing = true;
var uni = new Universe();
Universe.prototype.everything = true;
var uni2 = new Universe();

console.log(uni === uni2); // true

console.log(uni.nothing); // true
console.log(uni2.nothing); // true
console.log(uni.everything); // true
console.log(uni2.everything); // true
console.log(uni.bang); // Big
console.log(uni.constructor === Universe); // true


// 즉시 실행 함수로 감싸는 방법
var Universe;
(function () {
  var instance;

  Universe = function Universe() {
    if (instance) {
      return instance;
    }

    instance = this;

    this.start_time = 0;
    this.bang = "Big";

    return instance;
  };
}());