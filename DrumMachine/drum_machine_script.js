/*
document.getElementById("myBtn").addEventListener("mouseover", () => {
    document.getElementById("myPar").innerHTML = "Are you sure ?";
})

document.getElementById("myBtn").addEventListener("click", () => {
    document.getElementById("myPar").innerHTML = "Yarabbi Şükür";
})
*/

$(document).ready(function () {
    console.log("Don' check ma console logs, u stalker it guy!!!")
    var padOne = document.getElementById("clap");
    $('#btn-1').mousedown(function () {
        padOne.load();
        padOne.play();
    });

    var padTwo = document.getElementById("cymbal_2");
    $('#btn-2').mousedown(function () {
        padTwo.load();
        padTwo.play();
    });

    var padThree = document.getElementById("cymbal");
    $('#btn-3').mousedown(function () {
        padThree.load();
        padThree.play();
    });

    var padFour = document.getElementById("tom");
    $('#btn-4').mousedown(function () {
        padFour.load();
        padFour.play();
    });

    var padFive = document.getElementById("hi_hat");
    $('#btn-5').mousedown(function () {
        padFive.load();
        padFive.play();
    });

    var padSix = document.getElementById("snare");
    $('#btn-6').mousedown(function () {
        padSix.load();
        padSix.play();
    });

    var padSeven = document.getElementById("bass");
    $('#btn-7').mousedown(function () {
        padSeven.load();
        padSeven.play();
    });

    var padEight = document.getElementById("kick_2");
    $('#btn-8').mousedown(function () {
        padEight.load();
        padEight.play();
    });

    var padNine = document.getElementById("kick");
    $('#btn-9').mousedown(function () {
        padNine.load();
        padNine.play();
    });

});