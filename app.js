//alert('하이')
//태그선택 querySelector는 (css), getElementById (id)
const css = document.querySelector('h3');
const css2 = document.querySelector('h4');
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const body = document.getElementById('gradient')
//얘네를 선택하고 콘솔창으로 css color1 color2 body를 입력해보면 선택된태그들이 출력됨


//색입력 color1과 color2의 색을 선택했을때 두 색을 섞어서 body에 표시하는 함수를 만들자
function shuffle() {
    const c1 = color1.value; //선택한 색
    const c2 = color2.value; //선택한 색
    //자바스크립트의 문자열안에 변수 넣는법
    // "linear-gradient(to right, "+c1+" , yellow);" 요거 안쓰는 방법 ```백틱 싸옴표
    body.style.background = `linear-gradient(to right, ${c1}, ${c2})`; // 그리고 suffle()을 적용하러 html로

    css.innerText = body.style.background + ";"
}



//이벤트 리스너 사용
// color1.addEventListener('click', 함수)  <-'click'은 마우스 좌클릭인듯
css.addEventListener('click', click) //css는 h3이니까 걔를 누르면 아래 알림이 뜨겠지
css2.addEventListener('dblclick', click2) //css는 h3이니까 걔를 누르면 아래 알림이 뜨겠지 이건 더블클릭임
function click() {
    alert('클릭');
}
function click2() {
    alert('더블클릭');
}

//기존 html에 onclick을 지우고 input으로 한뒤 아래내용 추가하면 onclick안쓰고도 가능
color1.addEventListener('input', shuffle)
color2.addEventListener('input', shuffle)
//색을 바꾸는것으로 이벤트를 설정해도 함수를 동작하게할수가있다
color1.addEventListener('change', shuffle)
color2.addEventListener('change', shuffle)