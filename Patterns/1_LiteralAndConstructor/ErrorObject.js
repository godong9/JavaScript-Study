/**
 * 에러 객체
 *
 * - 자바스크립트에는 Error(), SyntaxError(), TypeError() 등 여러 가지 에러 생성자 내장. throw 문과 함께 사용
 * - name(객체를 생성한 생성자 함수의 name 프로퍼티), message(객체를 생성할 떄 생성자에 전달된 문자열) 프로퍼티 가짐
 */

// 커스텀 에러 객체
try {
  throw {
    name: "MyErrorType",
    message: "oops",
    extra: "This was rather embarrassing",
    remedy: Error
  };
} catch (e) {
    alert(e.message);

    e.remedy();
}