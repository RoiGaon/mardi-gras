let crr = 0;
const score = document.querySelector('h3');
const checkBox = document.querySelector('input[type="checkbox"]')
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const answer5 = document.querySelector('#answer5');
const answer6 = document.querySelector('#answer6');
const answer7 = document.querySelector('#answer7');
const answer8 = document.querySelector('#answer8');
const answer9 = document.querySelector('#answer9');
const answer10 = document.querySelector('#answer10');


function correct(input) {
    const MyForm = input.parentElement;
    MyForm.className = 'MyForm Correct';
    const small = MyForm.querySelector('small');
    small.innerText = `Correct Answer!`;

    if (input.checked == true) {
        crr++;
        score.innerText = `Your Score Is ${crr} Out Of 10`;
    }
}

function uncorrect(input) {
    const MyForm = input.parentElement;
    MyForm.className = 'MyForm unCorrect';
    const small = MyForm.querySelector('small');
    small.innerText = `Wrong Answer!`;
    if (input.checked == false) {
        score.innerText = `Your Score Is ${crr} Out Of 10`;
    }
}

function checkAnswer(input) {
    document.querySelector('input[type="button"]').addEventListener('click', function () {
        if (input.checked == true) {
            correct(input);
        } else {
            uncorrect(input);
        }
    });
}

checkAnswer(answer1);
checkAnswer(answer2);
checkAnswer(answer3);
checkAnswer(answer4);
checkAnswer(answer5);
checkAnswer(answer6);
checkAnswer(answer7);
checkAnswer(answer8);
checkAnswer(answer9);
checkAnswer(answer10);