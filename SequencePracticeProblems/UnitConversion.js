console.log("42 inches =", 42 / 12, "feet");

let lengthFeet = 60, widthFeet = 40;
console.log("Plot dimensions in meters:", lengthFeet * 0.3048, "m x", widthFeet * 0.3048, "m");

let totalArea = (lengthFeet * widthFeet * 25) / 43560;
console.log("Total area of 25 plots in acres:", totalArea.toFixed(2), "acres");