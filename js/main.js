function myFunction() {
    var txt = "Please enter a valid email address.";
    var emailID = document.getElementById("email");
    var interest = document.getElementById("interests").value;

    if (emailID.value === '') {
        emailID.setCustomValidity(document.getElementById("invalid").innerHTML = txt);
    } else if (emailID.validity.typeMismatch) {
        emailID.setCustomValidity(document.getElementById("invalid").innerHTML = txt);
    } else {
        emailID.setCustomValidity('');
        document.getElementById('submit').innerHTML = "Submitting...";

        setTimeout(function() {
            var x = document.getElementById("form");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }

            document.getElementById("thankyou").style.display = "block"
            console.log("Email - " + emailID.value + " , ", "Interest - " + interest);

        }, 2000);


    }




}