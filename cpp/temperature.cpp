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
    if (unitsArr[i] === inputU || unitsArr[i] == outU) {
      validator++;
    }
  
  if (validator != 2) {
    cout << errorMessage << endl;
    return 1;
  }
   
  switch (inU) {
    case 'c':
      if (outU == 'de') {
        return (100.0 - input) * 3/2;
      } else if (outU == 'f') {
        return (input * 9/5) + 32;
      } else if (outU == 'k') {
        return input + 273.15;
      } else if (outU == 'n') {
        return input * (33/100);
      } else if (outU == 'r') {
        return (input + 273.15) * 9/5;
      } else if (outU == 're') {
        return input * 4/5;
      } else if (outU == 'ro') {
        return (input * 21/40) + 7.5;
      }
      break;
    case 'de':
      if (outU == 'c') {
      } else if (outU == 'f') {
      } else if (outU == 'k') {
      } else if (outU == 'n') {
      } else if (outU == 'r') {
      } else if (outU == 're') {
      } else if (outU == 'ro') {
      }
      break;
    case 'f':
      if (outU == 'c') {
      } else if (outU == 'de') {
      } else if (outU == 'k') {
      } else if (outU == 'n') {
      } else if (outU == 'r') {
      } else if (outU == 're') {
      } else if (outU == 'ro') {
      }
      break;
    case 'k':
      if (outU == 'c') {
      } else if (outU == 'de') {
      } else if (outU == 'f') {
      } else if (outU == 'n') {
      } else if (outU == 'r') {
      } else if (outU == 're') {
      } else if (outU == 'ro') {
      }
      break;
    case 'n':
      if (outU == 'c') {
      } else if (outU == 'de') {
      } else if (outU == 'f') {
      } else if (outU == 'k') {
      } else if (outU == 'r') {
      } else if (outU == 're') {
      } else if (outU == 'ro') {
      }
      break;
    case 'r':
      if (outU == 'c') {
        return (input - 491.67) * 5/9;
      } else if (outU == 'de') {
        return (671.67 - input) * 5/6;
      } else if (outU == 'f') {
        return input - 459.67;
      } else if (outU == 'k') {
        return input * 5/9;
      } else if (outU == 'n') {
        return (input - 491.67) * 11/60;
      } else if (outU == 're') {
        return (input - 491.67) * 4/9;
      } else if (outU == 'ro') {
        return (input - 491.67) * 7/24 + 7.5;
      }
      break;
    case 're':
      if (outU == 'c') {
        return input * 5/4;
      } else if (outU == 'de') {
        return (80 - input) * 15/8;
      } else if (outU == 'f') {
        return input * 9/4 + 32;
      } else if (outU == 'k') {
        return input * 5/4 + 273.15;
      } else if (outU == 'n') {
        return input * 33/80;
      } else if (outU == 'r') {
        return input * 9/4 + 491.67;
      } else if (outU == 'ro') {
        return input * 21/32 + 7.5;
      }
      break;
    case 'ro':
      if (outU == 'c') {
        return (input - 7.5) * 40/21;
      } else if (outU == 'de') {
        return (60 - input) * 20/7;
      } else if (outU == 'f') {
        return (input - 7.5) * 24/7;
      } else if (outU == 'k') {
        return (input - 7.5) * 40/21 + 273.15;
      } else if (outU == 'n') {
        return (input - 7.5) * 22/35;
      } else if (outU == 'r') {
        return (input - 7.5) * 24/7 + 491.67;
      } else if (outU == 're') {
        return (input - 7.5) * 32/21;
      }
      break;
  }
}
