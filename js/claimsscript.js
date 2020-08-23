function validatePwd() {
    var name = document.getElementById('username').value;
	var password = document.getElementById('password').value.length;
    var alphaNumericValidtion = /^[0-9a-zA-Z]+$/;
    let flag = true;
    if(name == null) {
        alert("Username cannot be empty");
		flag = false;
    }
    else if(!name.match(alphaNumericValidtion)) {
        alert("Username is not allowed with special characters");
		flag = false;
    }
	else if(password < 4) {
        alert("Password should be atleast 4 characters");
		flag = false;
    }
	if(flag){
        window.location.href="SummaryPage.html";
	}
}

function formValidation() {
    var claimNum = document.getElementById('ClaimNumber').value;
    var claimPrgm = document.getElementById('ClaimPrograms').value;
    document.getElementById("ClaimNumberValidateMsg").innerHTML = '';
    document.getElementById("ClaimProgramsValidateMsg").innerHTML = '';
    console.log("formValidation()", claimNum, claimPrgm);
    var lettersAlphaNumeric = /^[0-9a-zA-Z-]+$/;
	var claimNumVal = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
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

