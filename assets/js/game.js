var wins = 0;
var losses = 0;
var crystalValue1 = [];
var crystalValue1Total = 0;
var crystalValue2 = [];
var crystalValue2Total = 0;
var crystalValue3 = [];
var crystalValue3Total = 0;
var crystalValue4 = [];
var crystalValue4Total = 0;
var totalScore = 0;

var target = getRandom(19, 120);
$("#target").text(target);
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function add(total, sum) {
    return total + sum;
};

$("#crystal1").on("click", function () {
    var random = getRandom(1, 12);
    crystalValue1.push(random);
    console.log(crystalValue1);
    crystalValue1Total = crystalValue1.reduce(add);
    $("#crystal1 span").text(random);
    console.log(crystalValue1Total);
});

$("#crystal2").on("click", function () {
    var random = getRandom(1, 12);
    crystalValue2.push(random);
    crystalValue2Total = crystalValue2.reduce(add);
    $("#crystal2 span").text(random);
});

$("#crystal3").on("click", function () {
    var random = getRandom(1, 12);
    crystalValue3.push(random);
    crystalValue3Total = crystalValue3.reduce(add);
    $("#crystal3 span").text(random);
});

$("#crystal4").on("click", function () {
    var random = getRandom(1, 12);
    crystalValue4.push(random);
    crystalValue4Total = crystalValue4.reduce(add);
    $("#crystal4 span").text(random);
});

function reset() {
    crystalValue1Total = 0;
    crystalValue2Total = 0;
    crystalValue3Total = 0;
    crystalValue4Total = 0;
    totalScore = 0;
    $("#totalScore").text("_");
    crystalValue1.length = 0;
    crystalValue2.length = 0;
    crystalValue3.length = 0;
    crystalValue4.length = 0;
    $("#crystal1 span").text("_");
    $("#crystal2 span").text("_");
    $("#crystal3 span").text("_");
    $("#crystal4 span").text("_");
    target = getRandom(19, 120);
    $("#target").text(target);
};


$(".crystals").on("click", function () {
    totalScore = crystalValue1Total + crystalValue2Total + crystalValue3Total + crystalValue4Total;
    $("#totalScore").text(totalScore);

    if (totalScore === target) {
        wins++;
        $("#wins").text(wins);
        alert("You Won!");
        reset();
    }
    if (totalScore >= target) {
        losses++;
        $("#losses").text(losses);
        alert("You Lose!");
        reset();
    }
});