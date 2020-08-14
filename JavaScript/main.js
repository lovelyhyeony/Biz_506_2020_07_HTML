var div_list = document.getElementsByTagName("div");
for(var i = 0; i < div_list.length; i++) { 
    var red = Math.floor(Math.random() * 256); // 0 ~ 255 
    var green = Math.floor(Math.random() * 256); // 0 ~ 255
    var blue = Math.floor(Math.random() * 256); // 0 ~ 255
    
    // 10진수를 16진수 문자열로 바꾸기
    // background-color
    // backgroundColor
    // 백틱(` : 숫자키 1번 왼쪽에 있는 문자)
    // 백틱 ES2015 이상에서만 사용가능한 연산자
    var s = "rgb(" + red + "," + green + "," + blue + ")";
    var color_string = `rgb( ${red}, ${green}, ${blue} )`;
    div_list[i].style.backgroundColor = color_string;
    div_list[i].innerHTML = color_string;
}

// 스크립트를 외부에다가 저장을 하고 아무런 태그도 들어가지 않고 그대로 사용
// .html에다가 script 태그에 src='main.js'해주면 include해준거랑 같다.