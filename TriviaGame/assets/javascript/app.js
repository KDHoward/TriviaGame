var questions = [{
    question: "Who was Batmans first robin?",
    choices: ["Tim Drake", "Dick Grayson", "Jason Todd", "Damian Wayne?"],
    correctAnswer: "Dick Grayson",
}, {
    question: "When did Stan Lee hep create Marvel ?",
    choices: ["1990", "1993", "1939", "1997"],
    correctAnswer: "1939",
}, {
    question: "How many infinity stones are there?",
    choices: ["6", "5", "4", "8"],
    correctAnswer: "6",
}, {
    question: "Who is Eddie Borck ?",
    choices: ["carange", "venom", "spider-man 2099", "reporter"],
    correctAnswer: "venom",
}, {
    question: "Who wins in Marvel civil war?",
    choices: ["Iron man", "Captian America", "Hydra", "No-one"],
    correctAnswer: "No-one",
}, {
    question: "Who is the master of the omega beams?",
    choices: ["Darkside", "Brainiac", "Super-man", "Artocitus"],
    correctAnswer: "Darkside",
}];



var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;



$("#timerStarts").hide();
$(".submitAnswer").hide();
$(".gameReset").hide();
$("#correctAnswers").hide();
$("#incorrectAnswers").hide();

function checkAnswer () { 
    for (var i = 0; i < questions.length; i++) {
        var userChoice = $("input[name = 'question-" + i +"']:checked");
        if (userChoice.val() == questions[i].correctAnswer) {
            correctAnswers++; 

            } else {
                incorrectAnswers++;
                
        }
    }
    $("#correctAnswers").append(" " + correctAnswers);
    $("#incorrectAnswers").append(" " + incorrectAnswers); 
};


function timer() {
    var seconds = 60;
    counter = setInterval (function() {
    $("#timerStarts").html('<h2> Time Remaining:' + seconds-- + '</h2>');
        if (seconds === -1) {
            $("#timerStarts").html("<h2> Out of Time! </h2>");
            clearInterval(counter);
            function delayScore(){
                $("#showQuestions").hide();
                $("#timerStarts").hide();
                $(".submitAnswer").hide();
                checkAnswer();
                $("#correctAnswers").show();
                $("#incorrectAnswers").show();
            }
            setTimeout(delayScore, 1000);
        }
    }, 1000);
    
};

$(".gameStart").on("click", function() {
    $(".gameStart").hide();
    displayCurrentQuestion();
    $("#timerStarts").show();
    timer();


});

function displayCurrentQuestion() {
    $(".submitAnswer").show();
    for (var i = 0; i < questions.length; i++) {
        $("#showQuestions").append("<h3>" + questions[i].question + "</h3");
        for (var j = 0; j < questions[i].choices.length; j++) {
            $("#showQuestions").append('<input type="radio" name="question'  + '-' + i + '" value="'+ questions[i].choices[j] + '"> '+ questions[i].choices[j] );

        }
    }
    $(".submitAnswer").on("click", function() {
        $("#showQuestions").hide();
        $("#timerStarts").hide();
        $(".submitAnswer").hide();
        checkAnswer();
        clearInterval(counter);
        $("#correctAnswers").show();
        $("#incorrectAnswers").show();

    });
};