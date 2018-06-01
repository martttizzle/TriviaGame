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
    var timeLeft = 12;
    var intervalID;
    var startButtonTimer
    var correct;
    var button;

    //The Game stars
    $("#strBtn").fadeIn(6000);
    $(".hide1").hide();
    $("#strBtn").on("click", function () {
        $(this).hide();
        $(".victory").hide();
        $("#yes").fadeOut(200);
        $(".hide1").show();
        $("#timer").html("<p class='col-xl-12 p'<b>" + "Time Remaining: " + timeLeft + " Seconds " + "</b></p>");
        start(qcnt);
    });

    function start(qcnt) {
        if (qcnt < 10) {
            clearInterval(intervalID);
            backgroundChange(qcnt);
            questions(qcnt);
            timeIt(12);
        }
        else {
            clearInterval(intervalID);
            backgroundChange(10)
            gameoverSlide();
        }
    }

    function timeIt(timeLeft) {
        intervalID = setInterval(function () {
            if (timeLeft > 1) {
                $("#timer").html("<p class='col-xl-12 p'<b>" + "Time Remaining: " + timeLeft + " Seconds " + "</b></p>");
            }
            else {
                $("#timer").html("<p class='col-xl-12 p'<b>" + "Time Remaining: " + timeLeft + " Second " + "</b></p>");
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
        let quest = question[i].q1;
        let ans1 = question[i].a;
        let ans2 = question[i].b;
        let ans3 = question[i].c;
        let ans4 = question[i].d;
        qDiv.html("<p class='col-sm-12 PP'>" + quest + "</p>");
        opt1.html("<p class='col-sm-12 p'>" + ans1 + "</p>");
        opt2.html("<p class='col-sm-12 p'>" + ans2 + "</p>");
        opt3.html("<p class='col-sm-12 p'>" + ans3 + "</p>");
        opt4.html("<p class='col-sm-12 p'>" + ans4 + "</p>");
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
            $("#answer").append("<p class='col-xs-12' id='answer'>CORRECT!</p>").show();
        }
        else if (correct == false) {
            $("#answer").append("<p class='col-xs-12' id='answer'>" + "<span id='wrg'>WRONG !!!</span> " + "<br>" + 'Correct Answer: ' +
                wrongAnswer(qcnt) + "</p>").show();
        }
        //Gif display length 
        setTimeout(showResults, 4600);
    }
    //Places questionbox back on screen and empties gif element and right or wrong text
    function showResults() {
        clearInterval(intervalID);
        $("#ans-image, #questionBox").show();
        $("#ok, #answer").empty();
        qcnt++
        timeLeft = 12;
        $("#timer").html("<p class='col-xl-12'<b style='col-sm-12 p'>" + "Time Remaining: " + timeLeft + " Seconds " + "</b></p>");
        start(qcnt);
    }
    //Finds the incorrect answers and sends it back to be displayed after user's wrong input
    function wrongAnswer(qcnt) {
        var wrgAnsTxt = wrongAnswerArry[qcnt];
        return wrgAnsTxt;
    }
    //Changes the background images
    function backgroundChange(num) {
        $("#body,.jumbotron").css("background-image", "url(" + bkgrdImg[num] + ")").fadeOut(0);
        $("#body,.jumbotron").css("background-image", "url(" + bkgrdImg[num] + ")").fadeIn(2000);

    }
    function gameoverSlide() {
        clearInterval(intervalID);
        $("#ans-image, #questionBox, #ok").hide();
        $("#results").append("<p class='col-xl' id='endAns'>" + "GAME OVER" + "<br>" + "Correct Answer:" +
            crtResults + "<br>" + "Wrong Answers:" + wrgResults + "<br>" + "No Answer:" + noAnswer + "</p>").show();
        button = $("#bttn").prepend("<button id='button'>" + "START OVER?" + "</button>").show();

        $(button).on("click", function () {
            clearInterval(intervalID);
            crtResults = 0;
            wrgResults = 0;
            noAnswer = 0;
            qcnt = 0;
            $("#results").append("<p class='col-xl' id='endAns'>" + "GAME OVER" + "<br>" + "Correct Answer:" +
                crtResults + "<br>" + "Wrong Answers:" + wrgResults + "<br>" + "No Answer:" + noAnswer + "</p>").empty();

            button = $("#bttn").prepend("<button id='button'>" + "START OVER?" + "</button>").empty();

            $("#ans-image, #questionBox").show();
            timeLeft = 12;
            start(qcnt);
        });
    }
});


