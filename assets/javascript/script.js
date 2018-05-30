$(document).ready(function () {

    var qDiv = $("#questionBox");
    var opt1 = $("#ans1");
    var opt2 = $("#ans2");
    var opt3 = $("#ans3");
    var opt4 = $("#ans4");
    var qcnt = 0;//question counter
    var crtResults = 0; //for endslide correct count
    var wrgResults = 0; // for endslide wrong count
    var noAnswer = 0; // for endslide no answer count
    var timeLeft = 10;
    var intervalID;
    var startButtonTimer
    var correct;
    var button;
  
    //Click to start and timer start

    
    $("#strBtn").fadeIn(5000);
    $(".victory").fadeIn(2500);
    // $("#strBtn").fadeOut(5000);
    $(".container").hide();
    $("#strBtn").on("click", function () {
        $(this).hide();
        $(".victory").hide();
        $("#yes").fadeOut(500);
        $(".container").show();
        $("#timer").html("<b>" + "Time Remaining: " + timeLeft + " Seconds " + "</b>");
        start(qcnt);
    });

    function start(qcnt) {
        if (qcnt <  10) {
            clearInterval(intervalID);
           backgroundChange(qcnt);
            questions(qcnt);
            timeIt(10);
        }
        else{
            clearInterval(intervalID);
            gameoverSlide();
        }
    }
        
    function timeIt(timeLeft) {
    intervalID = setInterval(function() { 
        if (timeLeft > 1) {
            $("#timer").html("<b>" + "Time Remaining: " + timeLeft + " Seconds " + "</b>");
        }
        else {
            $("#timer").html("<b>" + "Time Remaining: " + timeLeft + " Second " + "</b>");
        }
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(intervalID); // Clears the setInterval for timer                 
             noAnswer++;
              setTimeout(imageResults(qcnt, false), 5000);//timer not working
        }
    }, 1000);           
}
    //questions generated
    function questions(i) {
        console.log(i,"the question reset");
        let quest = question[i].q1;
        let ans1 = question[i].a;
        let ans2 = question[i].b;
        let ans3 = question[i].c;
        let ans4 = question[i].d;
        qDiv.html("<p>" + quest + "</p>");
        opt1.html("<p>A. " + "  " + ans1 + "</p>");
        opt2.html("<p>B. " + "  " + ans2 + "</p>");
        opt3.html("<p>C. " + "  " + ans3 + "</p>");
        opt4.html("<p>D. " + "  " + ans4 + "</p>");    
}

    //answer clicked
    $("#ans1, #ans2, #ans3, #ans4").on("click", function () {

        clearInterval(intervalID);
        let userPick = $(this).attr("id");
        let ans = question[qcnt].answer;

        if (userPick == ans) {
            correct = true;
            crtResults += 1;
            imageResults(qcnt, correct);
        } else {
            correct = false;
            wrgResults += 1;
            imageResults(qcnt, correct);
        }
    });

    //answer images
    function imageResults(qcnt, correct) {
              //hiding the question and answer box 
        $("#ans-image, #questionBox").hide();
             //showing the gif clip
        $("#ok").append(gifClip[qcnt]).show();
            //Conditional statements allow the right or wrong text to be displayed
        if (correct == true) {
            $("#answer").append("<p id='answer'>CORRECT!</p>").show();
        }
        else if (correct == false) {
            $("#answer").append("<p id='answer'>" + "WRONG! " + "<br>" + ' correct answer: ' +
            wrongAnswer(qcnt) + "</p>").show();
        } 
           //Gif display length 
        setTimeout(showResults, 4500);
     
    }
          //Places questionbox back on screen and empties gif element and right or wrong text
    function showResults() {
        clearInterval(intervalID);
        $("#ans-image, #questionBox").show();
        $("#ok, #answer").empty();
        qcnt++
        timeLeft = 10;
        $("#timer").html("<b>" + "Time Remaining: " + timeLeft + " Seconds " + "</b>");
        start(qcnt); 
    }

    function wrongAnswer(qcnt) {
        var wrgAnsTxt = wrongAnswerArry[qcnt];
        return wrgAnsTxt;
    }
 
    function backgroundChange(num) {
        $("#body,.jumbotron").css("background-image","url("+bkgrdImg[num]+")").fadeOut(0);
        $("#body,.jumbotron").css("background-image","url("+bkgrdImg[num]+")").fadeIn(1500);
       
    }
    function gameoverSlide() {
        clearInterval(intervalID);
        $("#ans-image, #questionBox, #ok").hide();
        $("#results").append("<p id='endAns'>" + "GAME OVER" + "<br>" + "Correct Answer:" +
            crtResults + "<br>" + "Wrong Answers:" + wrgResults + "<br>" + "No Answer:" + noAnswer + "</p>").show();
        button = $("#bttn").prepend("<button id='button'>" + "START OVER?" + "</button>").show();

        $(button).on("click", function () {
            clearInterval(intervalID);
            crtResults = 0;
            wrgResults = 0;
            noAnswer = 0;
            qcnt = 0;
            $("#results").append("<p id='endAns'>" + "GAME OVER" + "<br>" + "Correct Answer:" +
            crtResults + "<br>" + "Wrong Answers:" + wrgResults + "<br>" + "No Answer:" + noAnswer + "</p>").empty();

            button = $("#bttn").prepend("<button id='button'>" + "START OVER?" + "</button>").empty();

            $("#ans-image, #questionBox").show();
            timeLeft = 10;
            start(qcnt);

        });

    }

});


