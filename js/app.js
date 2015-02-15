//Hide and show form hints at appropriate times

var $username = $("#username");
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $submit = $("#submit");

//Hide hints by default
$("form span").hide();

function isUsernamePresent() {
  return $username.val().length > 0;  
}

function isPasswordValid() {
  return $password.val().length > 8;  
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();  
}

function usernameEvent() {
  //If username exists
  if(isUsernamePresent()) {
    //Hide username hint
    $username.next().hide();
  } else {
    //Else show username hint
    $username.next().show();
  }
}

function passwordEvent() {
  //Validate password
  if(isPasswordValid()) {
    //Hide hint if valid
    $password.next().hide();
  } else {
    //Show hint if invalid
    $password.next().show();
  }     
}  

function confirmPasswordEvent() {
  //Determine if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if matched
    $confirmPassword.next().hide();
  } else {
    //Else show hint
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $submit.prop("disabled", !canSubmit());
}

//When event occurs on username input
$username.focus(usernameEvent).keyup(usernameEvent).keyup(isUsernamePresent).keyup(passwordEvent).keyup(confirmPasswordEvent);

//When event occurs on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(isUsernamePresent).keyup(enableSubmitEvent);
  

//When event occurs on input confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(isUsernamePresent).keyup(enableSubmitEvent);

enableSubmitEvent();
  