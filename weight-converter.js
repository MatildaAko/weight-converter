//Metric and imperial buttons
const metricWeightinput = document.querySelector("#weightkg");
const metricHeightInput = document.querySelector("#heightcm");
const imperialWeightinput = document.querySelector("#weightlb");
const imperialHeightInputFeet = document.querySelector("#heightft");
const imperialHeightInputInches = document.querySelector("#heightin");
//Both convert buttons
const convertBtns = document.querySelectorAll(".convert-btn");
//Both calculate buttons
const calculateBtns = document.querySelectorAll(".calculate-btn");
//Paragraphs to add text
const metricParagraph = document.querySelector(".metric-paragraph");
const imperialParagraph = document.querySelector(".imperial-paragraph");

//Metric to imperial
const convertedMetricWeight = (metricWeightValue / 0.45359237).toFixed(2);
//Imperial to metric
const convertedImperialWeight = (imperialWeightValue * 0.45359237).toFixed(2);
//Converter
convertBtns.forEach((convertBtn) => {
  convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //Checks the button is in the metric form
    if (e.target.parentElement.classList.contains("metric-form")) {
      const metricWeightValue = metricWeightinput.value;
      //Checks that the user has inputted a number
      if (metricWeightValue === "") {
        metricParagraph.innerHTML = "Please enter a number";
      } else {
        //Converting the number then puts it in the form
        metricParagraph.innerHTML = `${metricWeightValue}kg is ${convertedMetricWeight}lb`;
        metricWeightinput.value = "";
      }
    } else {
      const imperialWeightValue = imperialWeightinput.value;
      if (imperialWeightValue === "") {
        imperialParagraph.innerHTML = "Please enter a number";
      } else {
        //Converting the number then puts it in the form
        imperialParagraph.innerHTML = `${imperialWeightValue}lb is ${convertedImperialWeight}kg`;
        imperialWeightinput.value = "";
      }
    }
  });
});
