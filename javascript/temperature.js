// Converts temperature units between Farenheit 'F', celcius 'C', Reaumur 'R', Kelvin 'K', Newton 'N', Delisle 'DE', Romer 'RO'
function convertTemp (input, inputUnit = 'F', outputUnit = 'C') {
	const errorMessage = '';
	const unitsArr = ['C', 'DE', 'F', 'K', 'N', 'R', 'RE', 'RO'];
	let validator = 0;
	const outputU = outputUnit.toUpperCase();
	const inputU = inputUnit.toUpperCase();
	
	for (let i = 0; i < unitsArr.length; i++) {
		if (unitsArr[i] === inputU || unitsArr[i] === outputU) { validator++; }
	}
	
	if (validator != 2) {
		console.log(errorMessage);
		return undefined;
	}
	
	switch (inputU) {
		case 'C':
			if (outputU === 'DE') {
				return (100 - input) * 3/2;
			} else if (outputU === 'F') {
				return (input * 9/5) + 32;
			} else if (outputU === 'K') {
				return input + 273.15;
			} else if (outputU === 'N') {
				return input * 33/100;
			} else if (outputU === 'R') {
				return (input + 273.15) * 9/5;
			} else if (outputU === 'RE') {
				return input * 4/5;
			} else if (outputU === 'RO') {
				return input * 21/40 + 7.5;
			}
			break;
		case 'DE':
			if (outputU === 'C') {
				return 100 - input * 2/3;
			} else if (outputU === 'F') {
				return 212 - input * 6/5;
			} else if (outputU === 'K') {
				return 373.15 - input * 2/3;
			} else if (outputU === 'N') {
				return 33 - input * 11/50;
			} else if (outputU === 'R') {
				return 671.67 - input * 6/5;
			} else if (outputU === 'RE') {
				return 80 - input * 8/15;
			} else if (outputU === 'RO') {
				return 60 - input * 7/20;
			}
			break;
			
		case 'F':
			if (outputU === 'C') {
				return (input - 32) * 5/9;
			} else if (outputU === 'DE') {
				return (212 - input) * 5/6;
			} else if (outputU === 'K') {
				return (input + 459.67) * 5/9;
			} else if (outputU === 'N') {
				return (input - 32) * 11/60;
			} else if (outputU === 'R') {
				return input + 459.67;
			} else if (outputU === 'RE') {
				return (input - 32) * 4/9;
			} else if (outputU === 'RO') {
				return (input - 32) * 7/24 + 7.5;
			}
			break;
		case 'K':
			if (outputU === 'C') {
				return input - 273.15;
			} else if (outputU === 'DE') {
				return (373.15 - input) * 3/2;
			} else if (outputU === 'F') {
				return input * 9/5 - 459.67;
			} else if (outputU === 'N') {
				return (input - 273.15) * 33/100;
			} else if (outputU === 'R') {
				return input * 9/5;
			} else if (outputU === 'RE') {
				return (input - 273.15) * 4/5;
			} else if (outputU === 'RO') {
				return (input - 273.15) * 21/40 + 7.5;
			}
			break;
			
		case 'N':
			if (outputU === 'C') {
				return input * 100/33;
			} else if (outputU === 'DE') {
				return (33 - input) * 50/11;
			} else if (outputU === 'F') {
				return input * 60/11 + 32;
			} else if (outputU === 'K') {
				return input * 100/33 + 273.15;
			} else if (outputU === 'R') {
				return input * 60/11 + 491.67;
			} else if (outputU === 'RE') {
				return input * 80/33;
			} else if (outputU === 'RO') {
				return input * 35/22 + 7.5;
			}
			break;
		case 'R':
			if (outputU === 'C') {
				return (input - 491.67) * 5/9;
			} else if (outputU === 'DE') {
				return (671.67 - input) * 5/6;
			} else if (outputU === 'F') {
				return input - 459.67;
			} else if (outputU === 'K') {
				return input * 5/9;
			} else if (outputU === 'N') {
				return (input - 491.67) * 11/60;
			} else if (outputU === 'RE') {
				return (input - 491.67) * 4/9;
			} else if (outputU === 'RO') {
				return (input - 491.67) * 7/24 + 7.5;
			}
			break;
		case 'RE':
			if (outputU === 'C') {
				return input * 5/4;
			} else if (outputU === 'DE') {
				return (80 - input) * 15/8;
			} else if (outputU === 'F') {
				return input * 9/4 + 32;
			} else if (outputU === 'K') {
				return input * 5/4 + 273.15;
			} else if (outputU === 'N') {
				return input * 33/80;
			} else if (outputU === 'R') {
				return input * 9/4 + 491.67;
			} else if (outputU === 'RO') {
				return input * 21/32 + 7.5;
			}
			break;
		case 'RO':
			if (outputU === 'C') {
				return (input - 7.5) * 40/21;
			} else if (outputU === 'DE') {
				return (60 - input) * 20/7;
			} else if (outputU === 'F') {
				return (input - 7.5) * 24/7 + 32;
			} else if (outputU === 'K') {
				return (input - 7.5) * 40/21 + 273.15;
			} else if (outputU === 'N') {
				return (input - 7.5) * 22/35;
			} else if (outputU === 'R') {
				return (input - 7.5) * 24/7 + 491.67;
			} else if (outputU === 'RE') {
				return (input - 7.5) * 32/21;
			}
			break;
	}
}
