function formValidation() {
    var fname = document.forms["myForm"]["firstname"].value;
    var staffNo = document.forms["myForm"]["staffno"].value;
    var kcdio = document.forms["myForm"]["kdcio"].value;
    var contactNo = document.forms["myForm"]["contactno"].value;
    var email = document.forms["myForm"]["emailid"].value;
    var kulliyah = document.forms["myForm"]["Kulliyah"].value;
    var donationAmount = document.forms["myForm"]["dono"].value;
  
    if (fname == "" || staffNo == "" || kcdio == "" || contactNo == "" || email == "" || kulliyah == "" || donationAmount == "") {
      alert("All fields must be filled out");
      return false;
    }


  
  
    return true;
  }