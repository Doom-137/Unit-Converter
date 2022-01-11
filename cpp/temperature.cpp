#include <iostream>
#include <cstring>
#include <cctype>

using namespace std;

/*
IN PROGRESS
*/

int convertTemp(float input, char inputUnit = 'f', outputUNit = 'c') {
  string errorMessage = "Unit(s) invalid, please check entered input and output units and try again.";
  char unitsArr[] = ['c', 'de', 'f', 'k', 'n', 'r', 're', 'ro'];
  int validator = 0;
  char outU =  toupper(outputUnit);
  char inU = toupper(inputUnit);
  
  for(int i = 0; i < unitsArr) {
    if (unitsArr[i] === inputU || unitsArr
  
  float tempCelsius, tempFarenheit,  
}
