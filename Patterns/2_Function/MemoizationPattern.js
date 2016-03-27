/**
 * 함수 프로퍼티 - 메모이제이션 패턴: 함수에 프로퍼티를 추가하여 결과(반환 값)를 캐시하면 다음 호출 시점에 복잡한 연산을 반복하지 않음
 */
var myFunc = function (param) {
  if (!myFunc.cache[param]) {
    var result = {};
    // 비용이 많이 드는 작업들
    myFunc.cache[param] = result;
  }
  return myFunc.cache[param];
};

// 캐시 저장공간
myFunc.cache = {};

// 더 많은 매개변수와 더 복잡합 타입의 경우 직렬화로 해결
var myFunc = function () {
  var cacheKey = JSON.stringify(Array.prototype.slice.call(arguments));
  var result;
  if (!myFunc.cache[cacheKey]) {
    result = {};
    // 비용이 많이 드는 작업들
    myFunc.cache[cacheKey] = result;
  }
  return myFunc.cache[cacheKey];
};

// 캐시 저장공간
myFunc.cache = {};





