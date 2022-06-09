
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN"); 
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");   
	
	// pattern only letters
      const pattern = new RegExp('^[A-Z]+$', 'i');

    // pattern at least one number and one letter
      const pattern2 = new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$');

    // pattern mail format
      const pattern3 = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');

	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || fName.value.length < 3 ){
		error++;
		fName.focus();
		fName.style.borderColor="red";
		errorName.style.display = "block";
	}

	if(!pattern.test(fName.value)){ 
        error++;
		fName.focus();
		fName.style.borderColor="red";
		errorName.style.display = "block";
    }

	if(fEmail.value == "" || fEmail.value.length < 3){
		error++;
		fEmail.focus();
		fEmail.style.borderColor="red";
		errorEmail.style.display = "block";
	}

	if(!pattern3.test(fEmail.value)){ 
        error++;
		fEmail.focus();
		fEmail.style.borderColor="red";
		errorEmail.style.display = "block";
    }

	if(fAddress.value == "" || fAddress.value.length < 3){
		error++;
		fAddress.focus();
		fAddress.style.borderColor="red";
		errorAddress.style.display = "block";
	}

	if(fLastN.value == "" || fLastN.value.length < 3){
		error++;
		fLastN.focus();
		fLastN.style.borderColor="red";
		errorLastN.style.display = "block";
	}

	if(!pattern.test(fLastN.value)){ 
        error++;
		fLastN.focus();
		fLastN.style.borderColor="red";
		errorLastN.style.display = "block";
    }

	if(fPassword.value == "" || fPassword.value.length < 3){
		error++;
		fPassword.focus();
		fPassword.style.borderColor="red";
		errorPassword.style.display = "block";
	}

	if(!pattern2.test(fPassword.value)){ 
        error++;
		fPassword.focus();
		fPassword.style.borderColor="red";
		errorPassword.style.display = "block";
    }

	if(fPhone.value == "" || fPhone.value.length < 3){
		error++;
		fPhone.focus();
		fPhone.style.borderColor="red";
		errorPhone.style.display = "block";
	}

	if (isNaN(fPhone.value)) {
  		error++;
		fPhone.focus();
		fPhone.style.borderColor="red";
		errorPhone.style.display = "block";
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
