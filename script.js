'use strict';

let i = 0;

//moves the iterator with event handler to each slide
//returns generated html from page


//Generate HTML function
function htmlGenerate() {
    let question = STORE.questions{STORE.}
    return '
        < div class ="box" >
            <div class="question">$(questions.questions) </div>
            <form class="form">
                <input type="radio" id="true" name="answers" value="${questions.answers[0]}">
                    <label for="true">${questions.answers[0]}</label><br>
                        <input type="radio" id="true" name="answers" value="${questions.answers[0]}">
                            <label for="true">${questions.answers[0]}</label>
        </br>
                        <button type="submit" id="submit">Submit</button>
    </form>

    </div>

    ';
}

</form>

//generate main page 
function generateMainPage() {

    }

    //render the page
    function renderQuiz() {
        let html = htmlGenerate();
        console.log(html);
        $("main").html(html);

    }


    //main function
    function main() {
        let startPage = generateMainPage;
        htmlGenerate();
        generateMainPage();
        renderQuiz();
        console.log(STORE.questions);
    }

    //submit answer

    function answerSubmit(event) {
        event.preventDefault();
        let answer = $("input-[radio-answers]:checked".val();
        if (STORE.questions[STORE.correctAnswer].answer == correctAnswer) {
            alert{ "You are right" };
        }
        else {
            alert{ "You are wrong!" }
            if(STORE.correctAnswer === STORE.question.length){
                alert {"You are at the end of the quiz! Thanks for Playing!"}
            }
            else {
                renderQuiz();
            }
        }

    }


    //item complete function
    function itemComplete() {
console.log($(this.).parent());
alert("completed");
renderQuiz;
    }

    // End of Quiz function
    function endOfQuiz(){


    }


/*
function generatePage(){
                    let answer = STORE.questions[STORE.questionNum];

    return '
    <div class="box">
                    <div class


    </div>';

}


/*</div>function renderPage(){
                        let html = '';
    html= generateStartPage();{
        return ()
    }
}


function startPage(){
return (

)
}


function submitButton(event){
                        event.preventDefault();
    let answer = $(input[input[radio=answers]:checked])
}




}



















//TO DO

//create variable for SCORE at $(.currentScore)
//figure out how to track and use this data

//research feilds for RADIO BUTTONS!!!
//add REQUIRED for radio buttons

//remove html elements from html
//create html areas for this

//TO KEEP TRACK OF QUESTION NUMBER
//we just want to access question STORE[1-5].index /5

//TO KEEP TRACK OF SCORE
//WE NEED A COUNTER
//WE NEED TO FIGURE OUT HOW TO COMMUNICATE WITH RADIO BUTTONS
//FIND OUT IF

//MAKE OBJECT FOR CORRECT AND INCORRECT PAGE
//CREATE THAT FUNCTION THAT PULLS OBJECT AND INPUTS TEXT
//BASED ON WETHER ANSWER WAS TRUE OR FALSE
//EACH TIME
function checkSubmission(event){
                        event.preventDefault();
    let value = $('input[type="radio"]:checked').val();
    console.log(value);
    //value in array


}




  //how to we get the
}

$('main').on('submit', 'form', checkSubmission);

$('main').on('click', 'button', renderQuiz);

function handleMain(){};

function nextQuestion(){};

function main(){
                        handleStart(
                            //render check to see if value (can store in store) is true or false
                        );
    handleSubmit(
        //render each function at  the end
        //then call next function
    );
    handleNext();

    render();
}

$(main);