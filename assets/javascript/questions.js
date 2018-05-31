var question = [{
    q1: "Who is Luke Skywalker's biological father?",
    a: "Darth Maul",
    b: "Darth Vader",
    c: "Darth Vapor",
    d: "Lando Calrissian",
    answer: "ans2"
}, {
    q1: "Fill in the blank: \"Help me, _________. You're are my only hope.\"",
    a: "Rey",
    b: "Leia Organa",
    c: "Obi-Wan Kenobi",
    d: "General Hux",
    answer: "ans3"
}, {
    q1: "What is the name of Boba Fett's ship?",
    a: "Slave 1",
    b: "Millennium Falcon",
    c: "Tantive IV",
    d: "IG-2000",
    answer: "ans1"
}, {
    q1: "What is the name of Han Solo's trusty blaster?",
    a: "Solo-6466",
    b: "DL-44",
    c: "laser-beam6",
    d: "LP0-1250",
    answer: "ans2"
}, {
    q1: "How many parsecs did the Millennium Falcon make the Kessel Run in?",
    a: "Less than 12 parsecs",
    b: "Less than 10 parsecs",
    c: "Less than 20 parsecs",
    d: "It was measured in Kessels",
    answer: "ans1"
}, {
    q1: "What is the name of Luke Skywalkers X-wing?",
    a: "Red Leader",
    b: "Red 2",
    c: "Red 5",
    d: "Red 0",
    answer: "ans3"
}, {
    q1: "You may know them by AT-AT, but what does it stand for?",
    a: "All Terrain Armored Transport",
    b: "All Terrain Assualt Transport",
    c: "All Terrain Attack Transport",
    d: "All Tactical Armored Tank",
    answer: "ans1"
}, {
    q1: "What part of the second Death Star was targeted by Lando and Wedge in order to destroy it entirely?",
    a: "Electromatic Shield-capacitor",
    b: "Thermal II exhaust port",
    c: "Hypermatter Core",
    d: "Sheild Generator",
    answer: "ans3"
}, {
    q1: "Which Imperial Admiral did Vader force-choke for coming out of the hyperspace too close to Hoth, and alerting the Rebels?",
    a: "Admiral Ozzel",
    b: "Admiral Needa",
    c: "Admiral Veers",
    d: "Admiral Piett",
    answer: "ans1"
}, {
    q1: "In what \"Detention Block\" was Princess Leia being held on the first Death Star?",
    a: "AA-23",
    b: "AA-24",
    c: "C-block 2138",
    d: "C-block 2343",
    answer: "ans1"
},
{}
];
// Gifs
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
//GIF array
var gifClip = [vader, leiaOrgana, slave1, DL44, Kessel, Red5, ATAT, Deathstar, Ozzel, Cblock];
// array of wrong answers
var wrongAnswerArry = [question[0].b, question[1].c, question[2].a, question[3].b, question[4].a, question[5].c, question[6].a, question[7].c, question[8].a, question[9].a];
//Background images
var bkgrdImg = ["assets/images/lukejpg.jpg","assets/images/leiajpg.jpg","assets/images/slave1png.png","assets/images/hansolojpg.jpg","assets/images/milleneniumjpg.jpg","assets/images/red5jpg.jpg","assets/images/atatpng.png","assets/images/deathstar2jpeg.jpg","assets/images/vaderchokejpg.jpg","assets/images/detentionblockjpg.jpg",];
