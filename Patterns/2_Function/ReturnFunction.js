/**
 * 함수 반환하기: 함수는 객체이기 때문에 리턴 값으로 사용 가능
 */
var setup = function () {
  alert(1);
  return function () {
    alert(2);
  };
};

var my = setup(); // alert으로 1이 출력
my(); // alert로 2가 출력

// counter
var setup = function () {
  var count = 0;
  return function() {
    return (count += 1);
  };
};

var next = setup();
next(); // 1을 리턴
next(); // 2을 리턴
next(); // 3을 리턴
