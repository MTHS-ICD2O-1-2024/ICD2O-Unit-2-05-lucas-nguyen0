// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Mar 2025
// This file contains the JS functions for index.html

/**
 * Calculates income tax
 */
function enterClicked() {
  // input
  const inputHours = parseFloat(document.getElementById("input-hours").value)
  const inputWage = parseFloat(document.getElementById("input-wage").value)
  const ONTARIO_INCOME_TAX = 0.18

  // process
  const takeHomeSalary = (inputHours * inputWage) * (1 - ONTARIO_INCOME_TAX)
  const taxDeducted = inputHours * inputWage * ONTARIO_INCOME_TAX

  // output
  document.getElementById("answer").innerHTML = 
    "Your pay will be: $" + takeHomeSalary.toFixed(2) + ". <br/>The government will take: $" + taxDeducted.toFixed(2) + "."
}
