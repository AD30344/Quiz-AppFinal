'use strict';

//let i = 0;

//moves the iterator with event handler to each slide
//returns generated html from page


//generate main page 
function generateMainPage() {
    return '   <div class="startPage">
        < h1 > Are you ready for some Coding questions? Click the button to get started! </h1>
    

        <div>
            <button class="button main-button" type="button">Start</button>
        </div>
</div>
        ;
}


//Generate the questions
function nextQuestion() {
    let question = STORE.questions{STORE.question};
    $(main).html
        ('< div class ="box"> 
            < div class= "question" > $(question.questions) </div >
        <form class="form">
        <input type="radio" id="true" name="answers" value="${questions.answers[0]}">
        <label for="true">${questions.answers[0]}</label><br>
        <input type="radio" id="true" name="answers" value="${questions.answers[0]}">
        <label for="false">${questions.answers[1]}</label>
        </br>
                    <button type="submit" id="submit">Submit</button>
    </form>

    </div>
</form>
    ');
}


//function that contains the HTML this should show the questions on the page
function endOfGame() {
                main.html(
            return '<div class = "endofGame">
                    <h1> End of quiz!</h1>
                        <h3>You got ${STORE.score} correct!</h3>
                        <button class="button main-button" type="button">Play again</button>
        </div > '
    
        );
}



//render the page
function renderQuiz() {
    let html = htmlGenerate();
    console.log(html);
    $("main").html(html);

}


//main function
function main() {
    
    htmlGenerate();
    generateMainPage();
    endofGame();
    renderQuiz();
    nextQuestion();
    answerSumbit();
    console.log(STORE.questions);
}

//submit answer

function answerSubmit(event) {
    event.preventDefault();
    let answer = $("input-[names-correctAnswer]:checked".val();
    if (STORE.questions[STORE.correctAnswer].answer == correctAnswer) {
        alert{ "You are right" };
        STORE.score++;
        //should iterate 
    }
    else {
        alert{ "You are wrong!" }
        if (STORE.correctAnswer === STORE.question.length) {
            alert { "You are at the end of the quiz! Thanks for Playing!" }
        }
        else {
            renderQuiz();
        }
    }

}


//item complete function
function itemComplete() {
    console.log($(this).parent());
    alert("completed");
    answerSubmit;
}


//event Handler for the submit button
$('main').on('click', 'button', function()
{
    renderQuiz();
});
//event handlers on submitting the form go to next question
$('main').on('submit', 'form', nextQuestion);






$(main);