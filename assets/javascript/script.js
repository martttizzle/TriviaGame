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
    var counter = 0;
    var timeleft = 11;
    var intervalID;
    var correct;
    var button;
    var bkgrdImg = "../images/deathstar.jpg";
    //right or wrong answer gifs
    var vader = '<img id="pic" class="col-xs-6" src="assets/images/vader.gif">';
    var leiaOrgana = '<img id="pic" src="assets/images/leiaOrgana.gif">';
    var slave1 = '<img id="pic" src="assets/images/slave1.gif">';
    var DL44 = '<img id="pic" src="assets/images/DL-44.gif">';
    var Kessel = '<img id="pic" src="assets/images/kessels.gif">';
    var Red5 = '<img id="pic" src="assets/images/red5.gif">';
    var ATAT = '<img id="pic" src="assets/images/atat.gif">';
    var Deathstar = '<img id="pic" src="assets/images/deathstarblow2.gif">';
    var Ozzel = '<img id="pic" src="assets/images/ozzel.gif">';
    var Cblock = '<img id="pic" src="assets/images/cellblock.gif">';
    //image array
    var gifClip = [vader, leiaOrgana, slave1, DL44, Kessel, Red5, ATAT, Deathstar, Ozzel, Cblock];
    // array of wrong answers
    var wrongAnswerArry = [question[0].b, question[1].c, question[2].a, question[3].b, question[4].a, question[5].c, question[6].a, question[7].c, question[8].a, question[9].a];


    //Click to start and timer start
    debugger;
    $(".container").hide();
    $("#strBtn").on("click", function () {
        intervalID = setInterval(timeIt, 1000);
        $(this).hide();
        $("#yes").fadeOut(500);
        $(".container").show();
        questions(qcnt);
    });

    //Count down timer
    function setup() {
        counter = 0;
        intervalID = setInterval(timeIt, 1000);
        console.log(intervalID);
    }
    //questions generated
    function questions(i) {
        if (i == 10) {
            gameoverSlide();
        }
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
            imageResults(qcnt, correct);
            crtResults += 1;
        } else {
            correct = false;
            imageResults(qcnt, correct);
            wrongAnswer(qcnt);
            wrgResults += 1;
        }
    });

    //answer images
    function imageResults(qcnt, correct) {
        //hiding the question box and showing the gif
        $("#ans-image, #questionBox").hide();
        $("#ok").append(gifClip[qcnt]).show();

        //Gif length display
        setTimeout(showResults, 1000);

        //Conditional statements allow the right or wrong text to be displayed
        if (correct == true) {
            $("#answer").append("<p>CORRECT</p>").show();
        }
        else if (correct == false) {
            $("#answer").append("<p id='answer'>" + "WRONG " + "<br>" + ' correct answer: ' +
                wrongAnswer(qcnt) + "</p>").show();
        }
    }
    //Places questionbox back on screen and empties gif element and right or wrong text
    function showResults() {
        $("#ans-image, #questionBox").show();
        $("#ok").empty();
        $("#answer").empty();
        qcnt++;
        questions(qcnt);
        setup();
    }

    function timeIt() {
        counter++;
        let countdown = (timeleft - counter);
        $("#timer").html("<b>" + "Time Remaining: " + countdown + " seconds " + "</b>");
        if (countdown == 0) {
            clearInterval(intervalID);
            correct = false;
            noAnswer += 1;
            imageResults(qcnt, false);
        }
    }

    //Display the correct answer after wrong selection
    function wrongAnswer(qcnt) {
        var abc = wrongAnswerArry[qcnt];
        return abc;
    }

    function backgroundChange() {
        $("#body").css('background-image', 'url("' + bkgrdImg + '")');
    }
    //I was trying to make the button call this function when clicked on as an in-line call
    //but it wouldn't mak a call, no matter how I tried with it. 
    function gameoverSlide(i) {

        clearInterval(intervalID);
        $("#ans-image, #questionBox").hide();

        $("#ok").append("<p id='endAns'>" + "GAME OVER" + "<br>" + "Correct Answer:" +
            crtResults + "<br>" + "Wrong Answers:" + wrgResults + "<br>" + "No Answer:" + noAnswer + "</p>").show();

        button = $("#ok").prepend("<button id='button'>" + "START OVER?" + "</button>").show();

        $(button).on("click", function () {
            clearInterval(intervalID);
            crtResults = 0;
            wrgResults = 0;
            noAnswer = 0;
            qcnt = 1;
            $("#ok").append("<p id='endAns'>" + "GAME OVER" + "<br>" + "Correct Answer:" +
            crtResults + "<br>" + "Wrong Answers:" + wrgResults + "<br>" + "No Answer:" + noAnswer + "</p>").hide();

        button = $("#ok").prepend("<button id='button'>" + "START OVER?" + "</button>").hide();
            $("#ans-image, #questionBox").show();

            questions(qcnt);
            console.log(qcnt, "as;ldfjkas");

        });

    }

});


