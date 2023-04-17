const form = document.getElementById('checkout-form');
const submitBtn = document.getElementsByID('submit');
const requiredInputs = form.querySelectorAll('[required]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const zip = document.getElementById('zip').value;
  const cardNumber = document.getElementById('card-number').value;
  const cardName = document.getElementById('card-name').value;
  const cardExpiry = document.getElementById('card-expiry').value;
  const cardCVV = document.getElementById('card-cvv').value;

  // Perform validation and submit form data to server

});

requiredInputs.forEach(input => {
  input.addEventListener('input', () => {
    if (form.checkValidity()) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting normally
  
  const formData = new FormData(form); // create a new FormData object with the form data
  
  fetch(form.action, { // submit the form data using fetch()
    method: form.method,
    body: formData
  })
  .then(response => {
    if (response.ok) {
      window.location.href = 'confirmation.html'; // redirect to the confirmation page
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => {
    console.error('There was a problem submitting the form:', error);
  });
});

