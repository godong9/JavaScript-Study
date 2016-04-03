/**
 * 중재자(Mediator)
 *
 * - 독립된 동료 객체들은 직접 통신하지 않고 중재자 객체를 거친다.
 * - 동료 객체들은 자신의 상태가 변경되면 중재자에게 알리고, 중재자는 이 변경 사항을 알아야 하는 다른 동료 객체들에게 알림
 */
// 게임 예제
function Player(name) {
  this.points = 0;
  this.name = name;
}
Player.prototype.play = function () {
  this.points += 1;
  mediator.played();
};

var scoreboard = {
  // 점수 표시 관련
};

// 중재자 객체
var mediator = {
  // 모든 player 객체들
  players: {},

  // 초기화
  setup: function () {
    var players = this.players;
    players.home = new Player('Home');
    players.guest = new Player('Guest');
  },

  // 누군가 play하고 점수를 업데이트
  played: function () {
    var players = this.players,
        score = {
          Home: players.home.points,
          Geust: players.guest.points
        };
    scoreboard.update(score);
  },
  // 사용자 인터랙션을 핸들링
  keypress: function (e) {
    e = e || window.event; // IE
    if (e.which === 49) { // 키 "1"
      mediator.players.home.play();
      return;
    }
    if (e.which === 48) { // 키 "0"
      mediator.players.guest.play();
      return;
    }
  }
};

// 시작!
mediator.setup();
window.onkeypress = mediator.keypress;

// 30초 후에 게임 종료
setTimeout(function () {
  window.onkeypress = null;
  alert("Game over!");
}, 30000);





