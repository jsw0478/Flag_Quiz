const answer_btn1 = document.querySelector('.answer1')
const answer_btn2 = document.querySelector('.answer2')
const answer_btn3 = document.querySelector('.answer3')
const answer_btn4 = document.querySelector('.answer4')
const answer_btns = [answer_btn1, answer_btn2, answer_btn3, answer_btn4]
const A1 = document.querySelector('.A1')
const A2 = document.querySelector('.A2')
const next = document.querySelector('.next')
const img = document.getElementById('img');
let QuizNumber = 1;
let QuizAnswers = ['한국', '미국', '중국', '일본']
let QuizCorrectAnswer = '한국'
let YourAnswer = ''
let CorrectNumber = 0
img.src = 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\1.Easy\\Korea.png';
next.disabled = true;



function NextQuiz() {
    QuizNumber++
    YourAnswer = ''
    A1.innerHTML = ''
    A2.innerHTML = ''
    next.disabled = true;
    if (QuizNumber == 2) {
        QuizAnswers = ['중국', '일본', '영국', '프랑스']
        QuizCorrectAnswer = '일본'
        img.src = 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\1.Easy\\Japan.png';
    }
    else if (QuizNumber == 3) {
        QuizAnswers = ['중국', '베트남', '멕시코', '미국']
        QuizCorrectAnswer = '중국'
        img.src = 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\1.Easy\\China.png';
    }
    else if (QuizNumber == 4) {
        QuizAnswers = ['영국', '대만', '미국', '한국']
        QuizCorrectAnswer = '미국'
        img.src = 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\1.Easy\\USA.png';
    }
    else if (QuizNumber == 5) {
        QuizAnswers = ['오스트리아', '이집트', '가나', '아르헨티나']
        QuizCorrectAnswer = '이집트'
        img.src = 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\2.Normal\\Egypt.png';
    }
    else if (QuizNumber == 6) {
        QuizAnswers = ['뉴질랜드', '보스니아', '미국', '태국']
        QuizCorrectAnswer = '태국'
        img.src = 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\2.Normal\\Kingdom of Thailand(태국).png';
    }
    else if (QuizNumber == 7) {
        QuizAnswers = ['멕시코', '배트남', '캐나다', '러시아']
        QuizCorrectAnswer = '멕시코'
        img.src = 'C:\\Users\\jswsa\\OneDrive\\바탕 화면\\Dlab(HTML)\\week9_Quiz\\Flag_Image\\2.Normal\\United Mexican States(멕시코).png';
    }
    QuizStart(QuizAnswers, QuizCorrectAnswer)
}

function QuizStart(Answers) {
    answer_btns.forEach((value, index) => {
        value.innerHTML = Answers[index];
        value.disabled = false;
        value.onclick = () => {CheckAnswer(Answers[index]);} 
    })
}

function CheckAnswer(SelectedAnswer) {
    YourAnswer = SelectedAnswer;
    if (YourAnswer === QuizCorrectAnswer) {
        A1.innerHTML = '정답!'
        A2.innerHTML = QuizCorrectAnswer
        CorrectNumber++
    }
    else {
        A1.innerHTML = '오답!'
        A2.innerHTML = QuizCorrectAnswer
    }
    answer_btns.forEach((value) => {value.disabled = true});
    next.disabled = false;

}

next.onclick = () => {NextQuiz()}

QuizStart(QuizAnswers)