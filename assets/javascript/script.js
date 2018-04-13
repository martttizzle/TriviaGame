$(document).ready(function () {
    var qDiv = $("#questionBox");
    var opt1 = $("#ans1");
    var opt2 = $("#ans2");
    var opt3 = $("#ans3");
    var opt4 = $("#ans4");
    var qcnt = 0;
    var intervalID;
    var vader = '<img id="pic" src="assets/images/vader.gif">';
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
    var questionImages = [vader, leiaOrgana, slave1, DL44, Kessel, Red5, ATAT, Deathstar, Ozzel, Cblock];
 
    
    $(".container").hide();
    $("#yes").on("click", function () {
        $(this).fadeOut(1000);
        $(".container").show();
        start(qcnt);
    });

    $("#ans1, #ans2, #ans3, #ans4").on("click", function () {
        let userPick = $(this).attr("id");
        let ans = question[qcnt].answer;
        if (userPick == ans) {
            imageResults(qcnt);
        } else {
           imageResults(qcnt);

        }
    });

    function start(i) {
        let quest = question[i].q1;
        let ans1 = question[i].a;
        let ans2 = question[i].b;
        let ans3 = question[i].c;
        let ans4 = question[i].d;

        qDiv.html("<p>" + quest + "</p>");
        opt1.html("<p>A." + "  " + ans1 + "</p>");
        opt2.html("<p>B." + "  " + ans2 + "</p>");
        opt3.html("<p>C." + "  " + ans3 + "</p>");
        opt4.html("<p>D. " + "  " + ans4 + "</p>");
        
    }
    //answer images

    function imageResults(qcnt) {
      
        $("#ans-image, #questionBox").hide();
        $("#ok").append(questionImages[qcnt]).show();
        setTimeout(showResults , 3500);
    }

    function showResults() {
        $("#ans-image, #questionBox").show();
        $("#ok").append(questionImages[qcnt]).empty();
        qcnt++;
        start(qcnt);

    }














































  //$("#ok").append('<img id="yes" src="assets/images/vader.jpg">');
        // start(qcnt);



































});//documentready