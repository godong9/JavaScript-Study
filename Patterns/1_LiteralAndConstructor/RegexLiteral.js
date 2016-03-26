/**
 * 정규식 리터럴
 */
var re = /\\/gm;

// 생성자
var re = new RegExp("\\\\", "gm");

// 정규 표현식 리터럴 문법
// g: 전역 매칭
// m: 여러 줄 매칭
// i: 대소문자 구분 없이 매칭
var re = /pattern/gmi;

// example
var no_letters = "abc123XYZ".replace(/[a-z]/gi, "");
console.log(no_letters); // "123"

