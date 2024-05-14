$(document).ready(function () {
    $(".num").click(function () {
        let defaultValue = parseInt($("#fvalue").text());
        let TakenValue = parseInt($(this).find("p").text());
        let newValue = defaultValue + TakenValue;
        $("#fvalue").text(newValue);
    });
});



const numClicked = parseInt($("#fvalue").find("p").text());

function caculate(numClicked) {
    let defaultValue = numClicked;
    let TakenValue = parseInt($(this).find("p").text())
    let newValue = defaultValue + TakenValue;
    return newValue
}



$(document).ready(function () {
    $(".num").click(function () {
 let ans = caculate(numClicked)
    $("#fvalue").text(ans);
    });
});

