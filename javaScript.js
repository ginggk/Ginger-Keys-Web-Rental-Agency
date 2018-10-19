function loadPlaybills() {
    var source = document.getElementById("playbillTemplate").innerHTML;
    var template = Handlebars.compile(source);
    var content = "";
    for (var i = 0; i < PAGE_DATA.playbills.length; i++) {
        content += template(PAGE_DATA.playbills[i]);
    }

    document.querySelector("#holder").insertAdjacentHTML("beforeend", content);
}
loadPlaybills();

var sourceLink = document.querySelectorAll(".adding-to-cart");
for (var i = 0; i < sourceLink.length; i++) {
    sourceLink[i].addEventListener("click", function() {
        $("#v-pills-cart-tab").tab("show");
    });
}

function getFirstName() {
    var payForm = document.forms["payment-form"];
    var emailInput = payForm.elements["email-address"];
    emailInput.addEventListener("change", function(event) {
        const input = event.target.value;
        if (!input.includes("@") || input.includes(" ")) {
            emailInput.classList.remove("valid");
            emailInput.classList.add("invalid");
            var pTag = payForm.querySelector(".help-text");
            pTag.innerText = "*Please enter a valid email address!";
        } else {
            emailInput.classList.remove("invalid");
            emailInput.classList.add("valid");
            var pTag = payForm.querySelector(".help-text");
            pTag.innerText = "";
        }
    });
}
getFirstName();

function validPhoneNumber() {
    var payForm = document.forms["payment-form"];
    var phoneInput = payForm.elements["phone-number"];
    phoneInput.addEventListener("change", function(event) {
        const input = event.target.value;
        if (input.length === 10) {
            phoneInput.classList.remove("invalid");
            phoneInput.classList.add("valid");
            var pTag = payForm.querySelector(".help-text2");
            pTag.innerText = "";
        } else {
            phoneInput.classList.remove("valid");
            phoneInput.classList.add("invalid");
            var pTag = payForm.querySelector(".help-text2");
            pTag.innerText = "*Please enter a valid 10 digit phone number!";
        }
    });
}

validPhoneNumber();

function getRandom() {
    var i = Math.floor(Math.random() * PAGE_DATA.playbills.length);
    return i;
}

function randomPlaybill() {
    var source = document.getElementById("randomPlaybillTemplate").innerHTML;
    var template = Handlebars.compile(source);
    var content = "";
    var i = getRandom();
    content += template({
        imgSrc: PAGE_DATA.playbills[i].imgSrc,
        price: PAGE_DATA.playbills[i].price,
        title: PAGE_DATA.playbills[i].title,
        description: PAGE_DATA.playbills[i].description
    });

    document
        .querySelector("#randomPlaybill")
        .insertAdjacentHTML("beforeend", content);

    document
        .querySelector("#link-to-rent")
        .addEventListener("click", function() {
            $("#v-pills-rent-tab").tab("show");
        });
}
randomPlaybill();

function showThanks() {
    var payForm = document.forms["payment-form"];
    var firstInput = payForm["first-name"];
    var firstName = firstInput.value;
    var lastInput = payForm["last-name"];
    var lastName = lastInput.value;
    var source = document.getElementById("thanksTemplate").innerHTML;
    var template = Handlebars.compile(source);
    // var price = selectPrice();
    var formContainer = document.querySelector(".form-container");

    formContainer.innerHTML = template({
        firstName: firstName,
        lastName: lastName,
        price: "$0.00"
    });
    document
        .querySelector("#refreshButton")
        .addEventListener("click", function() {
            $("#v-pills-home-tab").tab("show");
        });
}

function refreshPage() {
    location.reload();
}
// function putPrice(index) {
//     var price = PAGE_DATA.playbills[index].price;
//     console.log(price);
//     var getPrice = "$" + price;
//     return getPrice;
// }

// function selectPrice() {
//     var buttons = document.querySelectorAll(".adding-to-cart");
//     console.log(buttons);
//     for (var i = 0; i < buttons.length; i++) {
//         var button = buttons[i];
//         console.log(button);
//         button.addEventListener("click", function() {
//             putPrice(i);
//         });
//     }
// }

// title: PAGE_DATA.playbills[i].title,
// price: PAGE_DATA.playbills[i].price,
// imgSrc: PAGE_DATA.playbills[i].imgSrc,
// description: PAGE_DATA.playbills[i].description,
// i: PAGE_DATA.playbills[i].index
