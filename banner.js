var ban = document.createElement('div');
ban.style.width = "50%";
ban.style.height = "80px";
// ban.style.backgroundColor = "blue";
ban.style.position = "fixed";
ban.style.left = "25%";
ban.style.textAlign = "center";
ban.style.border = "solid black 2px"
ban.style.cursor = "pointer";
var navBar = document.getElementById('navBar');
ban.style.zIndex = "999";

navBar.insertBefore(ban, navBar.childNodes[0]);

var para = document.createElement('p');
para.style.fontSize = "1.3rem";
para.style.lineHeight = "80px";
para.style.letterSpacing = "3px";
var bannerStatement = document.createTextNode('ADVERTISMENT BANNER!');

para.appendChild(bannerStatement);

ban.appendChild(para);

// CREATE 'X' IN THE BANNER

var exit = document.createElement('p');

exit.style.backgroundColor = "#999999";
// exit.style.width = "20px";
// exit.style.height = "20px";
exit.style.position = "absolute";
exit.style.top = "0px";
exit.style.right = "0px";
exit.style.fontSize = "1.35em";
exit.style.width = "20px";
exit.innerHTML = "X";
exit.style.cursor = "pointer";
ban.appendChild(exit);

// display block

ban.style.display = "none";

function showBanner() {
    ban.style.display = "block";
}

setTimeout(showBanner, 5000);

exit.addEventListener("click", function() {
    ban.style.display = "none";
})

para.addEventListener("click", function() {
    window.location = "request.html";
});

// Popular Restaurants Section

var temp1 = document.getElementById("temp1");
var temp2 = document.getElementById("temp2");
var temp3 = document.getElementById("temp3");

var coupon1 = document.getElementById("coupon1")
var coupon2 = document.getElementById("coupon2")
var coupon3 = document.getElementById("coupon3")


temp1.addEventListener("mouseover" , function() {
     coupon1.style.bottom = "15px";
     temp1.addEventListener("mouseout", function() {
         coupon1.style.bottom = "50px";
     }); 

     coupon1.addEventListener("mouseover" , function() {
         coupon1.style.bottom = "15px";
     coupon1.addEventListener("mouseout" , function () {
         coupon1.style.bottom = "50px";
     })
     })

});


temp2.addEventListener("mouseover" , function() {
    coupon2.style.bottom = "15px";
    temp2.addEventListener("mouseout", function() {
        coupon2.style.bottom = "50px";
    });

    coupon2.addEventListener("mouseover" , function() {
        coupon2.style.bottom = "15px";
    coupon2.addEventListener("mouseout" , function () {
        coupon2.style.bottom = "50px";
    })
    })

});

temp3.addEventListener("mouseover" , function() {
    coupon3.style.bottom = "15px";
    temp3.addEventListener("mouseout", function() {
        coupon3.style.bottom = "50px";
    });
    
    coupon3.addEventListener("mouseover" , function() {
        coupon3.style.bottom = "15px";
    coupon3.addEventListener("mouseout" , function () {
        coupon3.style.bottom = "50px";
    })
    })

});

coupon1.style.transitionDuration = "0.3s";
coupon2.style.transitionDuration = "0.3s";
coupon3.style.transitionDuration = "0.3s";

coupon1.style.cursor = "pointer";
coupon2.style.cursor = "pointer";
coupon3.style.cursor = "pointer";