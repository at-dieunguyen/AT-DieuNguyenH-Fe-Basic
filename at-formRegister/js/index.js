//declare variables
var step = document.getElementsByClassName("step");
var btnNext = document.getElementsByClassName("btn-next")[0];
var btnPrev = document.getElementsByClassName("btn-prev")[0];
var input = document.getElementsByClassName("form-input");
var errorInfo = document.getElementsByClassName("error-message")[0];
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var currentTab = 0;
var currentStep = 1;
var arrCodeNumber = [];
//create function to show tab and button
function showTab(currentTab) {
  var input = document.getElementsByClassName("form-input");
  if (currentTab == 0) {
    document.getElementById("js-btnPrev").style.display = "none";
  } else {
    document.getElementById("js-btnPrev").style.display = "inline";
  }
  input[currentTab].style.display = "block";
}
showTab(currentTab);
//add event button next tab
function nextTab() {
  input[currentTab].style.display = "none";
  currentTab = currentTab + 1;
  showTab(currentTab);
  //add event step
  step[currentStep].classList.add("active");
  currentStep++;
}
//add event button prev tab
function prevTab() {
  btnPrev.addEventListener("click", function() {
    if (currentTab === 3) {
      input[currentTab].style.display = "none";
      currentTab = currentTab - 1;
      showTab(currentTab);
      currentStep = currentStep - 1;
      step[currentStep].classList.remove("active");
    }
    input[currentTab].style.display = "none";
    currentTab = currentTab - 1;
    showTab(currentTab);
    //add event step
    currentStep--;
    step[currentStep].classList.remove("active");
    if (currentTab === 0) {
      btnNext.disabled = false;
    }
    if (currentTab === 2) {
      btnNext.disabled = true;
    }
    if (currentTab === 1) {
      btnNext.disabled = false;
    }
  });
}
prevTab();
//event click button next
btnNext.addEventListener("click", function(e) {
  var validate = true;
  if (!firstName.value) {
    errorInfo.innerHTML = "*First name is required!";
    return !validate;
  }
  if (!lastName.value) {
    errorInfo.innerHTML = "*Last name is required!";
    return !validate;
  }
  if (!email.value) {
    errorInfo.innerHTML = "*Email is required!";
    return !validate;
  }
  if (email.value.indexOf("@") === -1) {
    errorInfo.innerHTML = "*Email does not match!";
    return !validate;
  }
  if (!password.value) {
    errorInfo.innerHTML = "*Password is required!";
    return !validate;
  }
  if (!confirmPassword.value) {
    errorInfo.innerHTML = "*Confirm password is required!";
    return !validate;
  }
  if (password.value !== confirmPassword.value) {
    errorInfo.innerHTML = "*Confirm password does not match!";
    return !validate;
  }
  nextTab();
  if (currentTab === 0) {
    document.getElementsByClassName("phone-number")[0].value = "";
  }
  if (currentTab === 1) {
    errorInfo.innerHTML = "";
    btnNext.disabled = true;
    checkPhone();
  }
  if (currentTab === 2) {
    clearValueCode();
    randomCode();
    btnNext.disabled = true;
    checkCodeNumber();
  }
  if (currentTab === 3) {
    showInfo();
  }
  if (currentTab === 4) {
    btnNext.style.display = "none";
    btnPrev.style.display = "none";
  }
});
//create function to check phone number: leng = 10
function checkPhone() {
  var phone = document.querySelectorAll(".phone-number");
  for (var i = 0; i < phone.length; i++) {
    phone[i].addEventListener("input", function() {
      var phone1 = document.getElementsByClassName("phone-number")[0].value
        .length;
      var phone2 = document.getElementsByClassName("phone-number")[1].value
        .length;
      var phone3 = document.getElementsByClassName("phone-number")[2].value
        .length;
      var countLength = phone1 + phone2 + phone3;
      if (countLength === 10) {
        btnNext.disabled = false;
      } else {
        btnNext.disabled = true;
      }
    });
  }
}
//function random code
function randomCode() {
  randomNumber = Math.floor(Math.random() * 9000) + 1000;
  alert("Your code number is: " + randomNumber);
  arrCodeNumber = randomNumber.toString().split("");
}
//fuction check code number match random code
function checkCodeNumber() {
  var numberCode = document.getElementsByClassName("input-code");
  for (var i = 0; i < numberCode.length; i++) {
    numberCode[i].addEventListener("input", function() {
      number1 = numberCode[0].value;
      number2 = numberCode[1].value;
      number3 = numberCode[2].value;
      number4 = numberCode[3].value;
      if (
        number1 === arrCodeNumber[0] &&
        number2 === arrCodeNumber[1] &&
        number3 === arrCodeNumber[2] &&
        number4 === arrCodeNumber[3]
      ) {
        btnNext.disabled = false;
      } else {
        btnNext.disabled = true;
      }
    });
  }
}
//function show infomation(Name, email, sdt)
function showInfo() {
  var phone1 = document.getElementsByClassName("phone-number")[0].value;
  var phone2 = document.getElementsByClassName("phone-number")[1].value;
  var phone3 = document.getElementsByClassName("phone-number")[2].value;
  document.getElementsByClassName("info-user-name")[0].innerHTML =
    lastName.value + " " + firstName.value;
  document.getElementsByClassName("info-user-email")[0].innerHTML = email.value;
  document.getElementsByClassName("info-user-phone")[0].innerHTML =
    phone1 + phone2 + phone3;
}
//function focus input
function focusNextInput(field, nextFieldID) {
  if (field.value.length >= field.maxLength) {
    document.getElementById(nextFieldID).focus();
  }
}
//function clear value in input codenumber when back step4 to step2
function clearValueCode() {
  var clearCode = document.getElementsByClassName("input-code");
  for (var i = 0; i < clearCode.length; i++) {
    clearCode[i].value = "";
  }
}
