/**
 * 원격 스크립팅
 *
 * - 현재 페이지를 다시 로드하지 않으면서 서버와 통신하기 위해 원격 스크립팅을 사용
 */

// XMLHttpRequest
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = handleResponse;

xhr.open("GET", "page.html", true);
xhr.send();


// JSONP(JSON with padding) - XHR과 달리 브라우저의 동일 도메인 정책의 제약을 받지 않음
var url = 'http://example.org/getdata.php?callback=myHandler'; // callback 매개변수에는 응답을 처리할 자바스크립트 함수를 지정
var script = document.createElement('script');
script.src =  url;
document.body.appendChild(script);


// 프레임과 이미지 비컨(Image Beacons)
// 자바스크립트로 iframe을 생성하고 src에 URL을 지정하는 방식
new Image().src = "http://example.org/some/paga.php"; // 이미지 비컨. "204 No Content" HTTP 상태코드를 보내는 것이 바람직.



