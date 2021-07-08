// input animation
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	// input.parentNode.parentNode.classList.remove("focus");
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);

});

//forgot tab(popup)
function popupToggle(){
	const popup = document.getElementById('popup');
	popup.classList.toggle('active')
	var blur = document.getElementById('blur');
	blur.classList.toggle('active');
}

//redirect code
document.getElementById("createHere").onclick = function () {
    window.location.href = "./signup.html";
};

// validation
var email = document.getElementById("email");
var password = document.getElementById("password");
var echeck = false;
var pcheck = false;

function validateInput(){
    const mail = email.value.trim();
    const pass = password.value.trim();    
    
    //check for email
    if(mail === "") {
        let parent = email.parentElement.parentElement;
        let iconelem = parent.querySelector("i");
        let errElem = document.getElementById("errMail");
        iconelem.style.color = "#ff0000";
        errElem.style.visibility = "visible";
        errElem.innerText = "Email cannot be empty";
        echeck = false;
    }
    else if(!isEmail(mail)) {
        let parent = email.parentElement.parentElement;
        let iconelem = parent.querySelector("i");
        let errElem = document.getElementById("errMail");
        iconelem.style.color = "#ff0000";
        errElem.style.visibility = "visible";
        errElem.innerText = "Email is not valid";
        echeck = false;
    }
    else{
        let parent = email.parentElement.parentElement;
        let iconelem = parent.querySelector("i");
        let errElem = document.getElementById("errMail");
        iconelem.style.color = "#3bc8ff";
        errElem.style.visibility = "hidden";
        errElem.innerText = "";
        echeck = true;
    }

    //check for password
    if(pass === ""){
        let parent = password.parentElement.parentElement;
        let iconelem = parent.querySelector("i");
        let errElem = document.getElementById("errPass");
        iconelem.style.color = "#ff0000";
        errElem.style.visibility = "visible";
        errElem.innerText = "Password cannot be empty";
        pcheck = false;
    }
    else if(pass.length <= 6){
        let parent = password.parentElement.parentElement;
        let iconelem = parent.querySelector("i");
        let errElem = document.getElementById("errPass");
        iconelem.style.color = "#ff0000";
        errElem.style.visibility = "visible";
        errElem.innerText = "Password must be more than 6 values";
        pcheck = false;
    }
    else{
        let parent = password.parentElement.parentElement;
        let iconelem = parent.querySelector("i");
        let errElem = document.getElementById("errPass");
        iconelem.style.color = "#3bc8ff";
        errElem.style.visibility = "hidden";
        errElem.innerText = "";
        pcheck = true;
    }
}

function isEmail(){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value.trim());
}

document.getElementById("login").addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
    if(echeck == true && pcheck == true){
        document.querySelector("form").submit();
    }
    else{
        event.preventDefault();
        // window.alert("please fill the form correctly");
    }
});

