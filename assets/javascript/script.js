$(document).ready(function () {

    var qDiv = $("#questionBox");
    var opt1 = $("#ans1");
    var opt2 = $("#ans2");
    var opt3 = $("#ans3");
    var opt4 = $("#ans4");
    var qcnt = 0;
    var intervalID;

    $(document).on('click', function() {
        start(qcnt);
        alert(qcnt);
    });
   //intervalID = setInterval(start(i), 1000);
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
        qcnt++; 
    }
//Selecting the answer
 $("#ans1, #ans2, #ans3, #ans4").on("click", function() {
    let userPick = $(this).attr("id");
    let a = question[qcnt].answer; 
    if(userPick == a)  {
        alert("correct");
        start(qcnt);
    }
});
 

//  $("#tst").on("click", function () {
//      start(qcnt);
//  });



});
