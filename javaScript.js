// var button = document.querySelector("button");
// button.addEventListener("click", )

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
