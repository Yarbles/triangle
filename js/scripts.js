var triangulator = function(side1, side2, side3) {
    var sum = side1 + side2 + side3;

    if(side1 >= side2 + side3 || side2 >= side1 + side3 || side3 >= side1 + side2) {
        return "That isn't a triangle, my friend";
    }
    else if(side1 === side2 && side2 === side3) {
        return "Equilateral triangle";
    }
    else if((side1 === side2 && side2 !== side3) || (side1 === side3 && side2 !== side3) || (side2 === side3 && side1 !== side3)) {
        return "Isoceles triangle";
    }
    else if(side1 !== side2 && side2 !== side3) {
        return "Scalene triangle";
    }
};

$(document).ready(function() {
    $("form#triangulator").submit(function(event) {
        var side_a = parseInt($("input#side_a").val());
        var side_b = parseInt($("input#side_b").val());
        var side_c = parseInt($("input#side_c").val());

        var result = triangulator(side_a, side_b, side_c);

        $("#result").show();
        event.preventDefault();
    });
});
