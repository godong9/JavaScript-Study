/**
 * 원시 데이터 타입 래퍼
 *
 * - 자바스크립트 원시 데이터 타입: Number, String, Boolean, null, undefined
 * - null과 undefined를 제외한 나머지 세 개는 원시 데이터 타입 래퍼라 불리는 객체 가지고 있음
 * - 원시 데이터 타입 값도 객체처럼 사용 가능 => 래퍼 객체의 메서드 사용 가능
 * - 원시 데이터 타입은 객체가 아니기 때문에 프로퍼티를 추가하여 확장할 수 없음 ex) var a = 100; a.b = 200; console.log(a.b); //undefined
 * - new를 빼먹고 래퍼 생성자를 사용하면 래퍼 생성자가 인자를 원시 데이터 타입의 값으로 변환
 */

// Number
var n = 100;
console.log(typeof n); // number

// Number Object
var nobj = new Number(100);
console.log(typeof nobj); // object

(22 / 7).toPrecision(3);

// String
var s = "hello";
console.log(s.toUpperCase()); // "HELLO"

"monkey".slice(3, 6); // "key"

