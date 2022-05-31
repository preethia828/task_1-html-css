function back() {
    var fullname = document.forms["RegForm"]["fullname"];
    var Username = document.forms["RegForm"]["Username"];
    var password = document.forms["RegForm"]["Password"];
    var password2 = document.forms["RegForm"]["password2"];


     if (fullname.value == "") {
            window.alert("Please enter your fullname.");
            fullname.focus();
            return false;
        }
  
        if (Username.value == "") {
            window.alert("Please enter your Username.");
            address.focus();
            return false;
        }
  
        if (Password.value == "") {
            window.alert("Please enter your Password");
            password.focus();
            return false;
        }
  
        if (password2.value=="") {
            alert("Please enter your password2.");
            password2.focus();
            return false;
        }
  
        return true;

}