/**
 * DOM 접근
 *
 * - 비용이 많이 드는 작업. DOM 접근을 최소화해야 함.
 * - 루프 내에서 DOM 접근을 피한다.
 * - DOM 참조를 지역 변수에 할당하여 사용한다.
 * - 가능하면 셀렉터 API를 사용한다.
 * - HTML 콜렉션을 순회할 때 length를 캐시하여 사용한다.
 */
// 루프
var i, content = "";
for (i = 0; i < 100; i += 1) {
  content += i + ",";
}
document.getElementById("result").innerHTML += content;

// 지역 변수 활용
var style = document.getElementById("result").style,
    padding = style.padding,
    margin = style.margin;

// 셀렉터 API
document.querySelector("ul .selected");


/**
 * DOM 조작
 *
 * - 문서 조각을 생성해 외부에서 수정한 후, 처리가 완전히 끝난 다음에 실제 DOM에 추가
 * - 이미 존재하는 트리 변경할 때는 변경하려는 서브 트리의 루트를 복제해서 변경한 뒤 원래의 노드와 복제한 노드를 맞바꿈
 */
// 문서 조각
var p, t, frag;

frag = document.createDocumentFragment();

p = document.createElement('p');
t = document.createTextNode('first paragraph');
p.appendChild(t);
frag.appendChild(p);

p = document.createElement('p');
t = document.createTextNode('second paragraph');
p.appendChild(t);
frag.appendChild(p);

document.body.appendChild(frag);

// 복제본
var oldnode = document.getElementById('result'),
    clone = oldnode.cloneNode(true);

// ...
// 복제본을 가지고 변경 작업을 처리
// ...

// 변경이 끝나면 원래의 노드와 교체
oldnode.parentNode.replaceChild(clone, oldnode);



