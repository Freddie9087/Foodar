
var userMsg = document.getElementById('inArea');
var isInHere = true;
zipcode_list = [78251, 78244, 79888, 23456, 45687, 78952];

// zipcodeChecker(zipcode);

function zipcodeChecker(zip) {
         for (i = 0; i <= zipcode_list.length; i++) {
             if (zip > 20000) {
                 if (zip == zipcode_list[i]) {
                     userMsg.innerHTML = "We’ve got your area covered!";
                     break;
                 } else if (i == zipcode_list.length) {
                    userMsg.innerHTML = "Sorry, we haven’t expanded to that area yet";
                 }
             } else {
                 userMsg.innerHTML = "Please enter a valid Zipcode";
             }
         }
}

var userInput = document.getElementById('text_input');


var btn = document.getElementById('go_btn');
btn.style.cursor = "pointer";

btn.addEventListener("click", function() {
    zipcodeChecker(userInput.value);


});