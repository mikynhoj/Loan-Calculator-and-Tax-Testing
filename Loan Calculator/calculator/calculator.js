window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  
  document.getElementById("loan-amount").value = 0;
  document.getElementById("loan-years").value = 0;
  document.getElementById("loan-rate").value = 0;
  
  let payment = document.getElementById("monthly-payment"); 
  payment.innerText = "$0";
  
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  
  let payment = document.getElementById("monthly-payment"); 
  payment.innerText = calculateMonthlyPayment(getCurrentUIValues());
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  console.log(values.amount, values.rate);
  let monthlyPayment = (values.amount * (values.rate/100)/12) / (1-(1+((values.rate/100)/12))**(-values.years*12));
  let final = monthlyPayment.toFixed(2); 
  console.log(typeof(final));
  return "$" + final; 
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {

}
