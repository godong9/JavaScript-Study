/**
 * 로딩 전략
 *
 * - <script> 엘리먼트는 페이지 다운로드의 진행을 차단. 다운로드 차단 현상을 최소화하기 위해서는 <script> 엘리먼트를 </body> 태그 바로 앞에 위치시켜야 함
 */
// 인라인 자바스크립트
<script>
  console.log("Hello world");
</script>
// src 속성에 링크릴 지정
<script src="external.js"></script>


// 다운로드를 차단하지 않는 동적인 <script> 엘리먼트
// - defer와 async 속성 사용
// - <script> 엘리먼트를 동적으로 생성


// 게으른 로딩: 외부 파일을 페이지의 load 이벤트 이후에 로드하는 기법
// - 페이지를 초기화하고 이벤트 핸들러를 UI 엘리먼트에 붙이는 핵심 코드를 첫 번째 부분으로 정한다.
// - 사용자 인터랙션이나 다른 조건들에 의해서만 필요한 코드를 두 번째 부분으로 나눈다.


// 주문형 로딩: 정말로 필요한 부분만 필요할 떄 로딩 (require)


// 자바스크립트 사전 로딩: 현재 페이지에서는 필요하지 않지만 다음으로 이동하게 될 페이지에서 필요한 스크립트를 미리 로딩

