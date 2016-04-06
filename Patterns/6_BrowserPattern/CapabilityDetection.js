/**
 * 기능 탐지(capability detection)
 *
 * - 사용자 에이전트를 감지해 코드를 분기하는 대신에, 사용하려는 메서드나 프로퍼티가 현재의 실행 환경에 존재하는지 확인하는 기술
 */

if (typeof document.attachEvent !== "undefined") {
  document.attachEvent('onclick', console.log);
}




