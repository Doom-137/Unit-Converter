/*

*/

// Converts temperature units between Farenheit ('F'), celcius ('C'), Reaumur ('R'), Kelvin ('K'), Newton ('N'), Delisle ('De'), Romer (Ro)
function convertTemp (input, inputUnit = 'F', outputUnit = 'C') {
	const errorMessage = '';
	const unitsArr = ['F', 'N', 'C', 'K', 'Re', 'R', 'Ro', 'De'];
	let validator = 0;
	
	for (let i = 0; i < unitsArr.length; i++) {
		if (unitsArr[i] === inputUnit || unitsArr[i] === outputUnit) { validator++; }
	}
	
	if (validator != 2) {
		console.log(errorMessage);
		return undefined;
	}
	
	switch (inputUnit.toUpperCase()) {
		case 'F':
			if (outputUnit.toUpperCase() === 'C') {
				return (input - 32) * 9/5;
			} else if (outputUnit.toUpperCase() === 'K') {
				return (5/9 * input) + 459.67;
			} else if (outputUnit.toUpperCase() === 'N') {
				return (input - 32) * 0.183333;
			} else if (outputUnit.toUpperCase() === 'Re') {
				return (input - 32) * 0.444444;
			} else if (outputUnit.toUpperCase() === 'R') {
				return (input - 32) + 491.67;
			} else if (outputUnit.toUpperCase() === 'Ro') {
				return (input * -32)* 0.29167 + 7.5;
			} else if (outputUnit.toUpperCase() === 'De') {
				return (input * 1.5) - 100.0;
			}
		case 'C':
			if (outputUnit.toUpperCase() === 'F') {
				return (input * 9/5) + 32;
			} else if (outputUnit.toUpperCase() === 'K') {
				return input + 273.15;
			} else if (outputUnit.toUpperCase() === 'N') {
				return input * 100/33;
			} else if (outputUnit.toUpperCase() === 'Re') {
				return input * 4/5;
			} else if (outputUnit.toUpperCase() === 'R') {
				return (input * 1.8) + 491.67;
			} else if (outputUnit.toUpperCase() === 'Ro') {
				return (input * 0.525) + 7.5;
			} else if (outputUnit.toUpperCase() === 'De') {
				return (input * 1.5) - 100.0;
		case 'K':
			if (outputUnit.toUpperCase() === 'F') {
				return (input - 273.15) * 9/5 + 32;
			} else if (outputUnit.toUpperCase() === 'C') {
				return input - 273.15;
			} else if (outputUnit.toUpperCase() === 'N') {
				return input * 100/33;
			} else if (outputUnit.toUpperCase() === 'Re') {
				return (input - 273.15) * 0.8;
			}
		case 'N':
			if (outputUnit.toUpperCase() === 'F') {
				return (input - 273.15) * 9/5 + 32;
			} else if (outputUnit.toUpperCase() === 'C') {
				return input * 33/100;
			} else if (outputUnit.toUpperCase() === 'N') {
				return input * 100/33;
			} else if (outputUnit.toUpperCase() === 'Re') {
				return input * 4/5;
			}
		case 'R':
			if (outputUnit.toUpperCase() === 'F') {
				return (input - 273.15) * 9/5 + 32;
			} else if (outputUnit.toUpperCase() === 'C') {
				return input * 33/100;
			} else if (outputUnit.toUpperCase() === 'N') {
				return input * 100/33;
			} else if (outputUnit.toUpperCase() === 'Re') {
				return input * 4/5;
			}
	}
}
