function loadPlaybills() {
    var source = document.getElementById("playbillTemplate").innerHTML;
    var template = Handlebars.compile(source);
    var content = "";
    for (var i = 0; i < PAGE_DATA.playbills.length; i++) {
        content += template({
            title: PAGE_DATA.playbills[i].title,
            price: PAGE_DATA.playbills[i].price,
            imgSrc: PAGE_DATA.playbills[i].imgSrc,
            description: PAGE_DATA.playbills[i].description
        });
    }
    document.querySelector("#holder").insertAdjacentHTML("beforeend", content);
}
loadPlaybills();

document.querySelector("#link-to-rent").addEventListener("click", function() {
    $("#v-pills-rent-tab").tab("show");
});

document.querySelector("#adding-to-cart").addEventListener("click", function() {
    $("#v-pills-cart-tab").tab("show");
});

$('input[type="checkbox"]').on("change", function() {
    $('input[type="checkbox"]')
        .not(this)
        .prop("checked", false);
});

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
        if (!input.length === 10 || input.includes(" ")) {
            phoneInput.classList.remove("valid");
            phoneInput.classList.add("invalid");
            var pTag = payForm.querySelector(".help-text2");
            pTag.innerText = "*Please enter a valid 10 digit phone number!";
        } else {
            phoneInput.classList.remove("invalid");
            phoneInput.classList.add("valid");
            var pTag = payForm.querySelector(".help-text2");
            pTag.innerText = "";
        }
    });
}

validPhoneNumber();

// function addPrice() {
//     var payForm = document.forms["payment-form"];
//     var button = payForm.elements["button"];

// }
