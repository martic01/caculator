function increaseBy5(num) {
    return parseInt(num) + 5;
}

function increaseBy10(num) {
    return parseInt(num) + 10;
}

function increaseBy15(num) {
    return parseInt(num) + 15;
}

function increaseBy20(num) {
    return parseInt(num) + 20;
}

function increaseBy25(num) {
    return parseInt(num) + 25;
}

function deductBy5(num) {
    return parseInt(num) - 5;
}

function deductBy10(num) {
    return parseInt(num) - 10;
}

function deductBy18(num) {
    return parseInt(num) - 18;
}

function deductBy25(num) {
    return parseInt(num) - 25;
}


function deductBy30(num) {
    return parseInt(num) - 30;
}




$(document).ready(function () {
    $(".num1").click(function () {
        let defaultValue = $("#fvalue").val();
        let solvedValue = increaseBy5(defaultValue);
        $("#fvalue").val(solvedValue);
    });


    $(".num2").click(function () {
        let defaultValue = $("#fvalue").val();
        let solvedValue = increaseBy10(defaultValue);
        $("#fvalue").val(solvedValue);
    });

    $(".num3").click(function () {
        let defaultValue = $("#fvalue").val();
        let solvedValue = increaseBy15(defaultValue);
        $("#fvalue").val(solvedValue);
    });

    $(".num4").click(function () {
        let defaultValue = $("#fvalue").val();
        let solvedValue = increaseBy20(defaultValue);
        $("#fvalue").val(solvedValue);
    });

    $(".num5").click(function () {
        let defaultValue = $("#fvalue").val();
        let solvedValue = increaseBy25(defaultValue);
        $("#fvalue").val(solvedValue);
    });

    $(".num6").click(function () {
        let defaultValue = $("#fvalue").val();
        let solvedValue = deductBy5(defaultValue);
        $("#fvalue").val(solvedValue);
    });

    $(".num7").click(function () {
        let defaultValue = $("#fvalue").val();
        let solvedValue = deductBy10(defaultValue);
        $("#fvalue").val(solvedValue);
    });

    $(".num8").click(function () {
        let defaultValue = $("#fvalue").val();
        let solvedValue = deductBy18(defaultValue);
        $("#fvalue").val(solvedValue);
    });

    $(".num9").click(function () {
        let defaultValue = $("#fvalue").val();
        let solvedValue = deductBy25(defaultValue);
        $("#fvalue").val(solvedValue);
    });
    $(".num10").click(function () {
        let defaultValue = $("#fvalue").val();
        let solvedValue = deductBy30(defaultValue);
        $("#fvalue").val(solvedValue);
    });


});

