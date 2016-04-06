/**
 * 웹 워커(Web Workers)
 *
 * - 장시간 수행되는 스크립트에 대해 백그라운드 스레드 제공
 */

var ww = new Worker('my_web_worker.js');
ww.onmessage = function (event) {
  document.body.innerHTML +=
    '<p>백그라운드 스레드의 메시지 ' + event.data + '</p>';
};





