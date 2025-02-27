const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const imgs = [img1, img2, img3, img4];

const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');
const inp3 = document.getElementById('inp3');
const inp4 = document.getElementById('inp4');
const inps = [inp1, inp2, inp3, inp4];

const A1 = document.querySelector('.A1');
const A2 = document.querySelector('.A2');
const A3 = document.querySelector('.A3');
const A4 = document.querySelector('.A4');
const As = [A1, A2, A3, A4];

const asr1 = document.querySelector('.asr1');
const asr2 = document.querySelector('.asr2');
const asr3 = document.querySelector('.asr3');
const asr4 = document.querySelector('.asr4');
const asrs = [asr1, asr2, asr3, asr4];

const next = document.querySelector('.next');

const B1 = document.querySelector('.B1')
const B2 = document.querySelector('.B2')

let YourAnswers = [];

let CrazyLevel = 1;
let CorrectNumber = 0;

const Crazy1 = ['../5.Crazy/Crazy_1/Egypt(이집트2).png', 
    '../5.Crazy/Crazy_1/Republic of Iraq(이라크).png', 
    '../5.Crazy/Crazy_1/Republic of Yemen(예멘).png', 
    '../5.Crazy/Crazy_1/Syria(시리아).png'];
const Crazy1Asrs = ['이집트', '이라크', '예멘', '시리아']

const Crazy2 = ['../5.Crazy/Crazy 2/Færøerne(페로 제도).png', 
    '../5.Crazy/Crazy_2/Iceland(아이슬란드).png', 
    '../5.Crazy/Crazy_2/Kingdom of Denmark(덴마크).png', 
    '../5.Crazy/Crazy_2/Kingdom of Norway(노르웨이).png'];
const Crazy2Asrs = ['페로 제도', '아이슬란드', '덴마크', '노르웨이']

const Crazy3 = ['../5.Crazy/Crazy 3/Republic of the Sudan(수단).png', 
    '../5.Crazy/Crazy_3/Hashemite Kingdom of Jordan(요르단).png', 
    '../5.Crazy/Crazy_3/State of Palestine(팔레스타인).png', 
    '../5.Crazy/Crazy_3/Sahrawi Arab Democratic Republic(사하라 아랍 민주 공화국).png'];
const Crazy3Asrs = ['수단', '요르단', '팔레스타인', '사하라 아랍 민주 공화국']



function CrazyStart() {
    inps.forEach((inp) => {
        inp.value = ''
    })
    As.forEach((value) => {
        value.innerHTML = ''
    })
    asrs.forEach((value) => {
        value.innerHTML = ''
    })
    next.innerHTML = '확인'
    if (CrazyLevel == 1) {
        imgs.forEach((value, index) => {
            value.src = Crazy1[index]
        })
    }
    else if (CrazyLevel == 2) {
        imgs.forEach((value, index) => {
            value.src = Crazy2[index]
        })
    }
    else {
        imgs.forEach((value, index) => {
            value.src = Crazy3[index]
        })
    }
    next.onclick = () => {CheckAnswer();} 
}

function CheckAnswer() {
    YourAnswers = [inp1.value, inp2.value, inp3.value, inp4.value]
    As.forEach((value, index) => {
        if (CrazyLevel == 1) {
            if (Crazy1Asrs[index] === YourAnswers[index]) {
                value.innerHTML = '정답!'
                CorrectNumber++
            }
            else {
                value.innerHTML = '오답!'
            }
            asrs.forEach((value, index) => {
                value.innerHTML = Crazy1Asrs[index]
            })
        }
        else if (CrazyLevel == 2) {
            if (Crazy2Asrs[index] === YourAnswers[index]) {
                value.innerHTML = '정답!'
                CorrectNumber++
            }
            else {
                value.innerHTML = '오답!'
            }
            asrs.forEach((value, index) => {
                value.innerHTML = Crazy2Asrs[index]
            })
        }
        else {
            if (Crazy3Asrs[index] === YourAnswers[index]) {
                value.innerHTML = '정답!'
                CorrectNumber++
            }
            else {
                value.innerHTML = '오답!'
            }
            asrs.forEach((value, index) => {
                value.innerHTML = Crazy3Asrs[index]
            })
        }

    })
    if (CrazyLevel == 3) {
        next.innerHTML = '결과 보기'
        next.onclick = () => {result()}
    }
    else {
        next.innerHTML = '다음'
        CrazyLevel++
        next.onclick = () => {CrazyStart()}
    }
}

function result() {
    imgs.forEach((value) => {
        value.style.visibility = 'hidden'
    })
    inps.forEach((value) => {
        value.style.visibility = 'hidden'
    })
    As.forEach((value) => {
        value.style.visibility = 'hidden'
    })
    asrs.forEach((value) => {
        value.style.visibility = 'hidden'
    })
    B1.innerHTML = '크레이지 모드 종료!'
    B2.innerHTML = `정답 개수 = ${CorrectNumber} / 12`
    next.innerHTML = '타이틀로 가기'
    next.onclick = () => {
        window.open('./index.html');
    }
}

CrazyStart(CrazyLevel)