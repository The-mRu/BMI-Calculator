document.getElementById('calculate').addEventListener('click', function() {
	var height = parseFloat(document.getElementById('height').value);
	var weight = parseFloat(document.getElementById('weight').value);
	var heightUnit = document.getElementById('heightUnit').value;
	var weightUnit = document.getElementById('weightUnit').value;
	if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
		if (heightUnit === 'ft') {
			height *= 30.48;
		}
		if (weightUnit === 'lb') {
			weight *= 0.453592;
		}
		var bmi = calculateBMI(height, weight);
		var category = getBMICategory(bmi);
		document.getElementById('result').innerHTML = 
			`Your BMI is <span class="font-semibold">${bmi.toFixed(2)}</span>. You are ${category}.`;
	} else {
		document.getElementById('result').innerHTML = 
			'<span class="text-red-500">Please enter valid height and weight.</span>';
	}
});
function calculateBMI(height, weight) {
	return weight / Math.pow(height / 100, 2);
}
function getBMICategory(bmi) {
	if (bmi < 18.5) {
		return 'Underweight';
	} else if (bmi >= 18.5 && bmi < 24.9) {
		return 'Normal weight';
	} else if (bmi >= 24.9 && bmi < 29.9) {
		return 'Overweight';
	} else {
		return 'Obese';
	}
}
