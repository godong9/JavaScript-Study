/**
 * 모듈 패턴
 */
var MYAPP = MYAPP || {};
MYAPP.utilities = {};

MYAPP.utilities.array = (function () {
  // 의존 관계 선언
  var uobj = MYAPP.utilities.object,
      ulang = MYAPP.utilities.lang;

  // 비공개 프로퍼티
  var array_string = "[object Array]",
      ops = Object.prototype.toString;

  // 비공개 메서드들
  // ...

  // 필요하면 일회성 초기화 절차 실행
  // ...

  // 공개 API
  return {
    inArray: function (needle, haystack) {
      for (var i = 0, max = haystack.length; i < max; i+= 1) {
         if (haystack[i] === needle) {
           return true;
         }
      }
    },
    isArray: function (a) {
      return ops.call(a) === array_string;
    }
    // 추가로 필요한 메서드와 프로퍼티들
    // ...
  }
}());


/**
 * 모듈 노출 패턴: 공개 API를 갖출 때 공개할 메서드만 골라서 노출
 */
MYAPP.utilities.array = (function () {
  // 의존 관계 선언
  var uobj = MYAPP.utilities.object,
    ulang = MYAPP.utilities.lang;

  // 비공개 프로퍼티
  var array_string = "[object Array]",
      ops = Object.prototype.toString,
      // 비공개 메서드들
      inArray = function (needle, haystack) {
        for (var i = 0, max = haystack.length; i < max; i+= 1) {
          if (haystack[i] === needle) {
            return true;
          }
        }
      },
      isArray = function (a) {
        return ops.call(a) === array_string;
      };

  // 공개 API 노출
  return {
    isArray: isArray,
    indexOf: inArray
  };
}());


/**
 * 생성자를 생성하는 모듈
 */
MYAPP.utilities.Array = (function () {
  // 의존 관계 선언
  var uobj = MYAPP.utilities.object,
    ulang = MYAPP.utilities.lang;

  // 비공개 프로퍼티
  var array_string = "[object Array]",
    ops = Object.prototype.toString,
    Constr;

  // 필요하면 일회성 초기화 절차 실행
  // ...

  // 공개 API - 생성자 함수
  Constr = function (o) {
    this.elements = this.toArray(o);
  };
  // 공개 API - 프로토타입
  Constr.prototype = {
    constructor: MYAPP.utilities.Array,
    version: "2.0",
    toArray: function (obj) {
      for (var i = 0, a = [], len = obj.length; i < len; i += 1) {
        a[i] = obj[i];
      }
      return a;
    }
  };

  // 생성자 함수를 반환
  return Constr;
}());

var arr = new MYAPP.utilities.Array(obj);


/**
 * 모듈에 전역 변수 가져오기
 */
MYAPP.utilities.Array = (function (app, global) {
  // 전역 객체에 대한 참조와 전역 애플리케이션 네임스페이스 객체가 지역 변수화

}(MYAPP, this));









