//Metric and imperial buttons
const metricWeightInput = document.querySelector("#weightkg");
const metricHeightInput = document.querySelector("#heightcm");
const imperialWeightInput = document.querySelector("#weightlb");
const imperialHeightInputFeet = document.querySelector("#heightft");
const imperialHeightInputInches = document.querySelector("#heightin");
//Both convert buttons
const convertBtns = document.querySelectorAll(".convert-btn");
//Both calculate buttons
const calculateBtns = document.querySelectorAll(".calculate-btn");
//Paragraphs to add text
const metricParagraph = document.querySelector(".metric-paragraph");
const imperialParagraph = document.querySelector(".imperial-paragraph");
//Converter
convertBtns.forEach((convertBtn) => {
  convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //Checks the button is in the metric form
    if (e.target.parentElement.classList.contains("metric-form")) {
      const metricWeightValue = metricWeightInput.value;
      //Checks that the user has inputted a number
      if (metricWeightValue === "") {
        metricParagraph.innerHTML = "Please enter a number";
      } else {
        //Metric to imperial
        const convertedMetricWeight = (metricWeightValue / 0.45359237).toFixed(2);
        //Converting the number then puts it in the form
        metricParagraph.innerHTML = `${metricWeightValue}kg is ${convertedMetricWeight}lbs`;
      }
    } else {
      const imperialWeightValue = imperialWeightInput.value;
      if (imperialWeightValue === "") {
        imperialParagraph.innerHTML = "Please enter a number";
      } else {
        //Imperial to metric
        const convertedImperialWeight = (imperialWeightValue * 0.45359237).toFixed(2);
        //Converting the number then puts it in the form
        imperialParagraph.innerHTML = `${imperialWeightValue}lb is ${convertedImperialWeight}kg`;
      }
    }
    clearAllFields();
  });
});

function convertHeightToMetersSquared(cm) {
  let meter = cm / 100;
  return meter * meter;
}

function calculateHeightAsInches(feet, inches) {
  let totalInches = parseFloat(feet * 12) + parseFloat(inches);
  return totalInches * totalInches;
}

function calculateMetricBMI(weight, height) {
  return (weight / height).toFixed(1);
}

function calculateImperialBMI(weight, height) {
  return ((weight / height) * 703).toFixed(1);
}

function clearAllFields() {
  metricWeightInput.value = "";
  metricHeightInput.value = "";
  imperialWeightInput.value = "";
  imperialHeightInputFeet.value = "";
  imperialHeightInputInches.value = "";
}

function bMIChecker(bmi) {
  let metricBMIResult;
  if (bmi <= 18.4) {
    metricBMIResult = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    metricBMIResult = "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    metricBMIResult = "Overweight";
  } else {
    metricBMIResult = "Obese";
  }
  return metricBMIResult;
}

calculateBtns.forEach((calculateBtn) => {
  calculateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.parentElement.classList.contains("metric-form")) {
      if (metricWeightInput === "" || metricHeightInput.value === "" || metricHeightInput.value === "") {
        metricParagraph.innerHTML = "Please ensure all fields have been filled";
      } else {
        let metricBMI = calculateMetricBMI(metricWeightInput.value, convertHeightToMetersSquared(metricHeightInput.value));
        let metricBMIResult = bMIChecker(metricBMI);
        metricParagraph.innerHTML = `Your BMI is ${metricBMI}, based on the information you provided, this is considered: ${metricBMIResult}`;
      }
    } else {
      if (imperialWeightInput === "" || imperialHeightInputFeet.value === "" || imperialHeightInputInches.value === "") {
        imperialParagraph.innerHTML = "Please ensure all fields have been filled";
      } else {
        let imperialBMI = calculateImperialBMI(
          imperialWeightInput.value,
          calculateHeightAsInches(imperialHeightInputFeet.value, imperialHeightInputInches.value)
        );
        let imperialBMIResult = bMIChecker(imperialBMI);
        imperialParagraph.innerHTML = `Your BMI is ${imperialBMI}, based on the information you provided, this is considered: ${imperialBMIResult}`;
      }
    }
    clearAllFields();
  });
});