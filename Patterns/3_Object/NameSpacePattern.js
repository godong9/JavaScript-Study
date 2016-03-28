/**
 * 네임스페이스 패턴: 애플리케이션이나 라이브러리를 위한 전역 객체를 하나 만들고 모든 기능을 이 객체에 추가
 */
// 전역객체
var MYAPP = {};

// 생성자
MYAPP.Parent = function () {};
MYAPP.Child = function () {};

// 변수
MYAPP.some_var = 1;

// 객체 컨테이너
MYAPP.modules = {};

// 객체들을 컨테이너 안에 추가
MYAPP.modules.module1 = {};
MYAPP.modules.module1.data = {a: 1, b: 2};
MYAPP.modules.module2 = {};


/**
 * 범용 네임스페이스 함수: 네임스페이스를 생성하거나 프로퍼티를 추가하기 전에 이미 존재하는지 여부를 확인
 */
if (typeof MYAPP === "undefined") {
  var MYAPP = {};
}
// 짧은 형태
var MYAPP = MYAPP || {};




