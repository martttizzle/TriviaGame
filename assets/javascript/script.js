$(document).ready(function () {
    var qDiv = $("#questionBox");
    var opt1 = $("#ans1");
    var opt2 = $("#ans2");
    var opt3 = $("#ans3");
    var opt4 = $("#ans4");
    var qcnt = 0;
    var intervalID;
    //image array
    var questionImages= ["","","","","","","","","",];
    var vader = 'src="assets/images/vader.jpg"';
    
   // $(".ok").append('<img id="yes" src="assets/images/star-wars.jpg">')
   $(".container").hide();
   $("#yes").on("click",function() {
       $(this).fadeOut(1000);
       $(".container").show(); 
    });
    
    

    console.log(qcnt);
    start(qcnt);
    $("#ans1, #ans2, #ans3, #ans4").on("click", function () {
        let userPick = $(this).attr("id");
        let ans = question[qcnt].answer;
        console.log(qcnt);
        if (userPick == ans) {
            alert("correct");
            qcnt++;
            imageResults();
            
        }else {
            alert("wrong");

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
        opt4.html("<p>D." + "  " + ans4 + "</p>");  
    }
  //answer images
  
    function imageResults() {
       $("#ans-image").hide();
       $("#ok").append('<img id="yes" src="assets/images/vader.jpg">');
      // start(qcnt);

    }






});