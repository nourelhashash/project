function validateForm() {
    console.log("Form validation function called");
    let x = document.forms["orderform"]["another-input"].value;
    
    if (x != "s1zf56g") {
      alert("Wrong!  please try Entering what you see in the picture correctly ...");
      return false;
    }
    
    // If filled out, the form is valid
    return true;
  }



  const cashRadio = document.getElementById('cash');
const creditCardRadio = document.getElementById('credit-card');
const creditCardInfoDiv = document.getElementById('credit-card-info');

// Function to show or hide credit card info based on radio button selection
function toggleCreditCardInfo() {
  if (creditCardRadio.checked) {
    creditCardInfoDiv.style.display = 'block';
  } else {
    creditCardInfoDiv.style.display = 'none';
  }
}

// Initially hide credit card info
toggleCreditCardInfo();

// Add event listener to radio buttons to toggle credit card info visibility
cashRadio.addEventListener('change', toggleCreditCardInfo);
creditCardRadio.addEventListener('change', toggleCreditCardInfo);
