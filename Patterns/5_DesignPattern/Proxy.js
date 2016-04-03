/**
 * 프록시(Proxy)
 *
 * - 하나의 객체가 다른 객체에 대한 인터페이스로 동작
 * - 클라이언트 객체와 실제 대상 객체 사이에 존재하면서 접근을 통제
 * - 게으른 초기화(lazy initialization): 프록시가 초기화 요청을 대신 받지만 실제 대상 객체가 사용되기 전까지는 요청 전달하기 않음
 * - 프록시의 새로운 cache 프로퍼티에 이전 요청의 결과를 캐시해두면 네트워크 라운드트립을 줄일 수 있음
 */
// 동영상 재생 애플리케이션 예제: 50밀리초 안에 들어오는 요청들을 하나로 병합해서 처리
var proxy = {
  ids: [],
  delay: 50,
  timeout: null,
  callback: null,
  context: null,

  makeRequest: function (id, callback, context) {
    // 큐에 추가한다
    this.ids.push(id);

    this.callback = callback;
    this.context = context;

    // timeout을 설정
    if (!this.timeout) {
      this.timeout = setTimeout(function () {
        proxy.flush();
      }, this.delay);
    }
  },
  flush: function () {
    http.makeRequest(this.ids, "proxy.handler");

    // timeout과 큐를 비운다
    this.timeout = null;
    this.ids = [];
  },
  handler: function (data) {
    var i, max;

    // 동영상이 한 개일 경우
    if (parseInt(data.query.count, 10) === 1) {
      proxy.callback.call(proxy.context, data.query.reuslts.Video);
      return;
    }

    // 동영상이 여러 개일 경우
    for (i = 0, max = data.query.result.Video.length; i < max; i += 1) {
      proxy.callback.call(proxy.context, data.query.results.Video[i]);
    }
  }
};





