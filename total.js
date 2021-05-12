function priceUpdate() {

var stylePrice = 0;
var tipAmount = 0;
var totalPrice = 0;
var mealCost = 10;  
// radio buttons and their values
var classic = document.getElementById("classic");
var premium = document.getElementById("premium");
var royal = document.getElementById("royal");
var ten = document.getElementById("ten");
var fifteen = document.getElementById("fifteen");
var twenty = document.getElementById("twenty");
var price = document.getElementById("final_price");

// CREATE A FUNCTION THAT WILL CALLED ON-CHANGE FOR EACH RADIO BUTTON

    function isChecked() {
        if (classic.checked) {
            stylePrice += Number(classic.value);
        }

        if (premium.checked) {
            stylePrice += Number(premium.value);
        }

        if (royal.checked) {
            stylePrice += Number(royal.value);
        }

        if (ten.checked) {
            tipAmount += Number(ten.value);
        }

        if (fifteen.checked) {
            tipAmount += Number(fifteen.value);
        }

        if (twenty.checked) {
            tipAmount += Number(twenty.value);
        }

    }

isChecked();
totalPrice = mealCost + stylePrice + ((stylePrice + mealCost) * tipAmount);
price.innerHTML = "Total: $" + totalPrice.toFixed(2); // add to cheatsheet
document.getElementById("btn").style.backgroundColor = "#999999";
document.getElementById("btn").style.cursor = "pointer";


};