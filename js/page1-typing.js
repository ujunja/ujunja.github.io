const typingtags = document.querySelectorAll('.home-introduction .typing-div h1');

var introductions = [
[
'初めまして, イスンウォンと申します!',
'いつもユーザーのための利便性を考えて',
'いつもユーザーのためのサービスを考えて',
'いつもユーザーのために自らを発展させる',
'理解の姿勢を忘れない開発者になります！',
'これから先よろしくお願いいたします!'
],
[
'안녕하세요, 이승원이라고 합니다!',
'사용자들을 위한 편의성을 추구하는',
'사용자들을 위한 서비스를 개발하는',
'사용자들을 위해 스스로를 발전하는',
'이해와 협력을 우선하는 개발자가 되겠습니다!',
'앞으로 잘 부탁드리겠습니다!'
],
[
'Hi, My name is Lee Seung won!',
'The Convenience for users',
'The Service for users',
'The Development for users',
'I will be a developer who puts users first!',
'Thank you!'
]
]

let change_count = 0;   
let input_count = 0;    // 문장의 줄을 구별해주는 함수
let arr_count = 0;      // 일본어, 한국어, 영어를 구별해주는 변수

function typingWriter() {
    
    if(introductions[arr_count][change_count].length == input_count) {
        change_count++;
        input_count = 0;
    }

    if(change_count > 5) {
        change_count = 0;
        input_count = 0;
        arr_count++;
        return setTimeout( deleteTyping , 10000);
    }

    typingtags[change_count].innerHTML += introductions[arr_count][change_count].split("")[input_count];
    input_count++;


    setTimeout(typingWriter, 100);
}

function typingMugan() {
    let result = typingWriter();
}

function deleteTyping() {
    for(let i = 0; i < typingtags.length; i++) {
        typingtags[i].innerHTML = '';
    }
    if(arr_count > 2) {
        arr_count = 0;
    }
    typingMugan();
}

typingMugan();