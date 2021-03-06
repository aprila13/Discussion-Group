  //Typed JS
  const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    backSpeed: 40
  });

//Scroll for arrow button
  const btn = document.querySelector('.fas');
  btn.addEventListener('click', scroller);
    function scroller(){
      window.scrollTo(0, 752);
    }


 //Displays nav after scroll   
  const nav = document.getElementById('nav');
  window.onscroll = function(){
    if(window.pageYOffset >= 730)
    nav.style.visibility = 'visible'
  }
 
//******* */
  //contact form
  function validateFirstName() {
    var firstName = document.getElementById('fName').value;
    if(firstName.length == 0) {
      alert("Name can't be blank") ;
      return false;

    }
    if (!firstName.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
      alert("Please enter your correct name") ;//Validation Message
      return false;
    }
    return true;
  }

  function validateLastName() {
    var lastName = document.getElementById('lName').value;
    if(lastName.length == 0) {
      alert("Name can't be blank") ;
      return false;

    }
    if (!lastName.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
      alert("Please enter your correct name") ;//Validation Message
      return false;
    }
    return true;
  }

  function validatePhone() {
    var phone = document.getElementById('phone').value;
    if(phone.length == 0) {
      alert("Phone number can't be blank") ;//Validation Message
      return false;
    }

    if(!phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
     alert("Please enter a correct phone number") ;//Validation Message
     return false;
   }

   return true;

 }

 function validateEmail () {

  var email = document.getElementById('email').value;
  if(email.length == 0) {
    alert("Email can't be blank") ;//Validation Message
    return false;

  }

  if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Please enter a correct email address") ;//Validation Message
    return false;

  }

  return true;

}


function validateForm() {
  if (!validateLastName() || !validateFirstName() || !validatePhone() || !validateEmail()) {

    alert("Form not submitted");//Validation Message
    return false;
  }
  else {
    submitted=true;
    return true;
  }
}
  

//meeting form
function meetingFirstName() {
  var fName = document.getElementById('firstName').value;
  if(fName.length == 0) {
    alert("Name can't be blank") ;
    return false;

  }
  if (!fName.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
    alert("Please enter your correct name") ;//Validation Message
    return false;
  }
  return true;
}

function meetingLastName() {
  var lName = document.getElementById('lastName').value;
  if(lName.length == 0) {
    alert("Name can't be blank") ;
    return false;

    
  }
  if (!lName.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
    alert("Please enter your correct name") ;//Validation Message
    return false;
  }
  return true;
}

function meetingPhone() {
  var meetingphoneNum = document.getElementById('meetingPhone').value;
  if(meetingphoneNum.length == 0) {
    alert("Phone number can't be blank") ;//Validation Message
    return false;
  }

  if(!meetingphoneNum.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
   alert("Please enter a correct phone number") ;//Validation Message
   return false;
 }

 return true;

}

function meetingEmail () {
var meetingEmailInfo = document.getElementById('meetingEmail').value;
if(meetingEmailInfo.length == 0) {
  alert("Email can't be blank") ;//Validation Message
  return false;

}

if(!meetingEmailInfo.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
  alert("Please enter a correct email address") ;//Validation Message
  return false;

}

return true;

}


function validateMeeting() {
if (!meetingLastName() || !meetingFirstName() || !meetingPhone() || !meetingEmail()) {

  alert("Form not submitted");//Validation Message
  return false;
}
else {
  submitted=true;
  return true;
}
}


  

  
