function validatePwd() {
    let name = document.getElementById('username').value;
	let password = document.getElementById('password').value.length;
	document.getElementById("userNameValidateMsg").innerHTML = '';
	document.getElementById("pwdValidateMsg").innerHTML = '';
	 
    let alphaNumericValidtion = /^[0-9a-zA-Z]+$/;
    let flag = true;
    if(name == null) {
	    document.getElementById("userNameValidateMsg").innerHTML = "Username cannot be empty";
		flag = false;
    }
   if(!name.match(alphaNumericValidtion)) {
		document.getElementById("userNameValidateMsg").innerHTML = "Username is not allowed with special characters";
		flag = false;
    }
	if(password < 4) {
		document.getElementById("pwdValidateMsg").innerHTML = "Password should be atleast 4 characters";
		flag = false;
    }
	if(flag){
        window.location.href="SummaryPage.html";
	}
}

function formValidation() {
    let claimNum = document.getElementById('ClaimNumber').value;
    let claimPrgm = document.getElementById('ClaimPrograms').value;
    document.getElementById("ClaimNumberValidateMsg").innerHTML = '';
    document.getElementById("ClaimProgramsValidateMsg").innerHTML = '';
    let lettersAlphaNumeric = /^[0-9a-zA-Z-]+$/;
	let claimNumVal = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    if (!claimNum.match(lettersAlphaNumeric)) 
	{
		 document.getElementById("ClaimNumberValidateMsg").innerHTML = "No Special Characters allowed";
	}
	if (!claimNum.match(claimNumVal)) {
        document.getElementById("ClaimNumberValidateMsg").innerHTML = "Please enter number in specified format";
    }
    if (claimPrgm.length > 20) {
        document.getElementById("ClaimProgramsValidateMsg").innerHTML = "Please enter maximum of 20 digits";
    }
	if (claimPrgm.length == 0) {
        document.getElementById("ClaimProgramsValidateMsg").innerHTML = "This field is required";
    }
}

