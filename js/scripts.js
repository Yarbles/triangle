var triangulator = function(side1, side2, side3) {
    var sum = side1 + side2 + side3;

    if(side1 >= side2 + side3 || side2 >= side1 + side3 || side3 >= side1 + side2) {
        return "That isn't a triangle, my friend";
    }
    else if(side1 === side2 && side2 === side3) {
        return "Equilateral triangle";
    }
};
