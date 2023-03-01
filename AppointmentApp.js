const myForm = document.querySelector('#book-appointment');

// Listen for form submit


console.log(name);
myForm.addEventListener('submit', onSubmit);

function onSubmit(event) 
{
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // event.preventDefault();
  console.log("Name : " + name + "Email " + email + "Phone number : " + phone);
}