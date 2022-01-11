// Converts temperature units between Farenheit 'F', celcius 'C', Reaumur 'R', Kelvin 'K', Newton 'N', Delisle 'DE', Romer 'RO'
function getTemp (input, code) {
	const conversionEqs = {
		'cde': function () { return (100 - input) * 3/2; },
		'cf': function () { return (input * 9/5) + 32; },
		'ck': function () { return input + 273.15; },
		'cn': function () { return input * 33/100; },
		'cr': function () { return (input + 273.15) * 9/5; },
		'cre': function () { return input * 4/5; },
		'cro': function () { return input * 21/40 + 7.5; },
		'dec': function () { return 100 - input * 2/3; },
		'def': function () { return 212 - input * 6/5; },
		'dek': function () { return 373.15 - input * 2/3; },
		'den': function () { return 33 - input * 11/50; },
		'der': function () { return 671.67 - input * 6/5; },
		'dere': function () { return 80 - input * 8/15; },
		'dero': function () { return 60 - input * 7/20; },
		'fc': function () { return (input - 32) * 5/9; },
		'fde': function () { return (212 - input) * 5/6; },
		'fk': function () { return (input + 459.67) * 5/9; },
		'fn': function () { return (input - 32) * 11/60; },
		'fr': function () { return input + 459.67; },
		'fre': function () { return (input - 32) * 4/9; },
		'fro': function () { return (input - 32) * 7/24 + 7.5; },
		'kc': function () { return input - 273.15; },
		'kde': function () { return (373.15 - input) * 3/2; },
		'kf': function () { return input * 9/5 - 459.67; },
		'kn': function () { return (input - 273.15) * 33/100; },
		'kr': function () { return input * 9/5; },
		'kre': function () { return (input - 273.15) * 4/5; },
		'kro': function () { return (input - 273.15) * 21/40 + 7.5; },
		'nc': function () { return input * 100/33; },
		'nde': function () { return (33 - input) * 50/11; },
		'nf': function () { return input * 60/11 + 32; },
		'nk': function () { return input * 100/33 + 273.15; },
		'nr': function () { return input * 60/11 + 491.67; },
		'nre': function () { return input * 80/33; },
		'nro': function () { return input * 35/22 + 7.5; },
		'rc': function () { return (input - 491.67) * 5/9; },
		'rde': function () { return (671.67 - input) * 5/6; },
		'rf': function () { return input - 459.67; },
		'rk': function () { return input * 5/9; },
		'rn': function () { return (input - 491.67) * 11/60; },
		'rre': function () { return (input - 491.67) * 4/9; },
		'rro': function () { return (input - 491.67) * 7/24 + 7.5; },
		'rec': function () { return input * 5/4; },
		'rede': function () { return (80 - input) * 15/8; },
		'ref': function () { return input * 9/4 + 32; },
		'rek': function () { return input * 5/4 + 273.15; },
		'ren': function () { return input * 33/80; },
		'rer': function () { return input * 9/4 + 491.67; },
		'rero': function () { return input * 21/32 + 7.5; },
		'roc': function () { return (input - 7.5) * 40/21; },
		'rode': function () { return (60 - input) * 20/7; },
		'rof': function () { return (input - 7.5) * 24/7 + 32; },
		'rok': function () { return (input - 7.5) * 40/21 + 273.15; },
		'ron': function () { return (input - 7.5) * 22/35; },
		'ror': function () { return (input - 7.5) * 24/7 + 491.67; },
		'rore': function () { return (input - 7.5) * 32/21; }
	};
	
	const errorMessage = 'Unit(s) invalid, please check entered input and output units and try again.';
	
	return (code in conversionEqs) ? conversionEqs[code](): errorMessage;
}

function convertTemp (input, inputUnit = 'f', outputUnit = 'c') {
	const inputU = inputUnit.toLowerCase();
	const outputU = outputUnit.toLowerCase();
	const convertCode = inputU + outputU;
	
	return getTemp(input, convertCode);
}
