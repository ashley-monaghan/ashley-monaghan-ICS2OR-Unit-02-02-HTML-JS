// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {
  document.getElementById("calculate-area").innerHTML = "<p>The area is: " + (5 * 3) + "<sup>2</sup>cm</p>"
  document.getElementById("calculate-perimeter").innerHTML = "<p>The perimeter is: " + (2 * (5 + 3)) + "cm</p>"  
}
