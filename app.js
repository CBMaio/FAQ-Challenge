const questionText = document.querySelectorAll(".question-p");
const answer = document.querySelectorAll(".answer");
const arrow = document.querySelectorAll(".img-arrow");
let questionSelected = 0;

function show() {
    for (let i = 0; i < questionText.length; i++){
        questionText[i].onclick = function() {
            questionText[i].classList.contains('question-open-text') 
            ? hiddenQuestion(questionText[i], arrow[i], answer[i]) 
            : showQuestion(questionText[i], arrow[i], answer[i]);
        }
       
    }

}


function showQuestion (text, img, paragraph) {
    text.classList.add('question-open-text');
    img.classList.add('question-open');
    paragraph.classList.remove('hidden');
    questionSelected++;
};

function hiddenQuestion(text, img, paragraph) {
    text.classList.remove('question-open-text');
    img.classList.remove('question-open');
    paragraph.classList.add('hidden');
};


show()
