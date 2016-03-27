/**
 * 즉시 실행 함수: 함수가 선언되자마자 실행되도록 하는 문법. 초기화 코드에 유효범위 샌드박스를 제공(모든 코드를 지역 유효범위로 한정)
 */
(function () {
  alert("watch out!");
}());

// 즉시 실행 함수의 매개변수
(function  (who, when) {
  console.log("I met " + who + " on " + when);
}("Joe Black", new Date()));
// 출력 결과: I met Joe Black on Sat Mar 26 2016 18:04:12 GMT+0900 (KST)

// 전역 객체를 'global'로 참조
(function (global) {
  // global 로 전역 객체 접근 가능
}(this));

// 즉시 실행 함수의 반환 값
var result = (function () {
  return 2 + 2;
}());

var getResult = (function () {
  var res = 2 + 2;
  return function () {
    return res;
  };
}());

var o = {
  message: (function () {
    var who = "me",
      what = "call";
    return what + " " + who;
  }()),
  getMsg: function() {
    return this.message;
  }
};
o.getMsg(); // "call me"
o.message; // "call me"


// 즉시 실행 함수 패턴으로 개별 기능을 모듈화
// module1.js에서 정의한 module1
(function () {
  // 모든 module1 코드
}());
