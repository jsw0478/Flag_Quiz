const answer_btn1 = document.querySelector('.answer1')
const answer_btn2 = document.querySelector('.answer2')
const answer_btn3 = document.querySelector('.answer3')
const answer_btn4 = document.querySelector('.answer4')
const answer_btns = [answer_btn1, answer_btn2, answer_btn3, answer_btn4]
const A1 = document.querySelector('.A1')
const A2 = document.querySelector('.A2')
const next = document.querySelector('.next')
const img = document.getElementById('img');
const Crazy = document.querySelector('.Crazy')
let QuizStarted = 'false';
let QuizNumber = 1;
let QuizValue = ['한국', '미국', '중국', '일본', '한국', 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\1.Easy\\Korea.png']
let YourAnswer = '';
let CorrectNumber = 0;
img.src = QuizValue[5];
answer_btns.forEach((value) => {
    value.style.visibility = 'hidden';
})
img.style.visibility = 'hidden';
A1.innerHTML = '국기 퀴즈';
next.innerHTML = '시작'

Crazy.onclick = () => {
    window.open('C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Crazymode.html');
}

function NextQuiz() {
    QuizNumber++
    YourAnswer = ''
    A1.innerHTML = ''
    A2.innerHTML = ''
    next.disabled = true;
    if (QuizNumber == 2) {
        QuizValue = ['중국', '일본', '영국', '프랑스', '일본', 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\1.Easy\\Japan.png']
    }
    else if (QuizNumber == 3) {
        QuizValue = ['중국', '베트남', '멕시코', '미국', '중국', 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\1.Easy\\China.png']
    }
    else if (QuizNumber == 4) {
        QuizValue = ['영국', '대만', '미국', '한국', '미국', 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\1.Easy\\USA.png']
    }
    else if (QuizNumber == 5) {
        QuizValue = ['오스트리아', '이집트', '가나', '아르헨티나', '이집트', 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\2.Normal\\Egypt.png']
    }
    else if (QuizNumber == 6) {
        QuizValue = ['뉴질랜드', '보스니아', '미국', '태국', '태국', 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\2.Normal\\Kingdom of Thailand(태국).png']
    }
    else if (QuizNumber == 7) {
        QuizValue = ['멕시코', '배트남', '캐나다', '러시아', '멕시코', 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\2.Normal\\United Mexican States(멕시코).png']
    }
    else if (QuizNumber == 8) {
        QuizValue = ['호주', '이란', '시에라리온', '라이베리아', '이란', 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\3.Hard\\Islamic Republic of Iran(이란).png']
    }
    else if (QuizNumber == 9) {
        QuizValue = ['캄보디아', '룩셈부르크', '르완다', '미얀마', '캄보디아', 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\3.Hard\\Kingdom of Cambodia(캄보디아).png']
    }
    else if (QuizNumber == 10) {
        QuizValue = ['라도니아', '키르기스스탄', '가이아나', '세인트빈센트 그레나딘', '세인트빈센트 그레나딘', 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\4.insame\\Saint Vincent and the Grenadines(세인트빈센트 그레나딘).png']
    }
    else if (QuizNumber == 11) {
        QuizValue = ['니카라과', '상투메 프린시페', '세인트루시아', '니제르', '상투메 프린시페', 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\4.insame\\República Democrática de São Tomé e Príncipe(상투메 프린시페).png']
    }
    else if (QuizNumber == 12) {
        QuizValue = ['세인트키츠 네비스', '동티모르', '라트비아', '파푸아뉴기니', '파푸아뉴기니', 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\4.insame\\Independent State of Papua New Guinea(파푸아뉴기니).png']
    }
    img.src = QuizValue[5]
    QuizStart(QuizValue)
}

function QuizStart(Answers) {
    Crazy.style.visibility = 'hidden'
    answer_btns.forEach((value, index) => {
        value.innerHTML = Answers[index];
        value.disabled = false;
        value.onclick = () => {
            value.style.backgroundColor = 'aqua';
            CheckAnswer(Answers[index]);
        } 
    })
}

function CheckAnswer(SelectedAnswer) {
    YourAnswer = SelectedAnswer;
    if (YourAnswer === QuizValue[4]) {
        A1.innerHTML = '정답!'
        A2.innerHTML = QuizValue[4]
        CorrectNumber++
    }
    else {
        A1.innerHTML = '오답!'
        A2.innerHTML = QuizValue[4]
    }
    answer_btns.forEach((value) => {value.disabled = true});
    next.disabled = false;
    if (QuizNumber == 12) {
        next.innerHTML = '결과 보기'
    }

}

function result(Number) {
    answer_btns.forEach((value) => {
        value.style.display = 'none';
    })
    img.style.display = 'none'
    A1.innerHTML = '퀴즈 종료!'
    A2.innerHTML = `정답 개수 = ${Number} / 12`
    QuizNumber = 13
    next.innerHTML = '크레이지 모드 시작'
    Crazy.style.visibility = 'visible'
    Crazy.innerHTML = '타이틀로'
    next.onclick = () => {
        window.open('C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Crazymode.html');
    }
    Crazy.onclick = () => {
        location.reload(true);
    }
}

next.onclick = () => {
    answer_btns.forEach((value) => {
        value.style.backgroundColor = '#6dd5fa'
    })
    if (QuizStarted == 'false') {
        QuizStarted = 'true'
        answer_btns.forEach((value) => {
            value.style.visibility = 'visible';
        })
        img.style.visibility = 'visible';
        next.innerHTML = '다음 문제';
        A1.innerHTML = '';
        next.disabled = true;
        QuizStart(QuizValue)
    }
    else if (QuizNumber != 12 && QuizNumber < 13) {
        NextQuiz()
    }
    else if (QuizNumber == 12){
        result(CorrectNumber)
    }
    else {

    }
}