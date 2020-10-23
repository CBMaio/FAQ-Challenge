const questionText = document.querySelectorAll("#question-p");
const answer = document.querySelectorAll("#answer");
const arrow = document.querySelectorAll("#img-arrow");

questionText.forEach((text) => {
    text.onclick = function() {
       /*  text.classList.contains('question-open-text')  */       
        console.log(answer)
        console.log(text)
        /* hiddenAnswer() : showAnswer(); */
    }
});

function showAnswer () {
    arrow.classList.add('question-open');
    answer.classList.remove('hidden');
    questionText.classList.add('question-open-text');
};

function hiddenAnswer() {
    arrow.classList.remove('question-open');
    answer.classList.add('hidden');
    questionText.classList.remove('question-open-text');
}

/* const answersOpenAndClose = () => {
    console.log('ho')
    questionText.classList.contains('question-open-text') ? hiddenAnswer() : showAnswer() 
} */


