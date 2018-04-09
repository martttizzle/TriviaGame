$(document).ready(function () {

    var qDiv = $("#questionBox");
    var opt1 = $("#ans1");
    var opt2 = $("#ans2");
    var opt3 = $("#ans3");
    var opt4 = $("#ans4");
    var qcnt = 0;

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
        opt4.html("<p>D." + "  " + ans4 + "</p>");
        qcnt++
        gameOver(qcnt);
    }

//Selecting the answer
$("#ans1, #ans2, #ans3, #ans4").on("click", function() {
    var a = $(this);
    alert(a);
    console.log(a);
     if(a == "p#ans1") {
         alert("correct match");
     }
});

























    $("#tst").on("click", function () {
        start(qcnt);
    });

    function gameOver(qcnt) {
        
        if (qcnt > 8) {
            alert('over');
        }
    }


});
