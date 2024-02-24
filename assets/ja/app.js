let acord_items = document.querySelectorAll(".accord-part");
let acord_item = document.querySelector(".accord-part>p");

let full_box = document.querySelector("#full_box");
let box = document.querySelector("#box");
let text = document.querySelector(".txt");
let icon = document.querySelector("#svg");

full_box.addEventListener("click", () => {
    box.classList.toggle("active");

})

acord_item.style.display = "block";
icon.style.transform = "rotate(180deg)";

acord_items.forEach(element => {
    let box = element.querySelector("#box");
    let text = element.querySelector(".txt");
    let icon = element.querySelector("#svg");
    let full_box = element.querySelector("#full_box");
    let num = 0;


    element.addEventListener("click", () => {
        acord_items.forEach(otherelement => {
            if (otherelement !== element) {
                let svg = otherelement.querySelector("#svg");
                let disp_text = otherelement.querySelector(".txt");
                disp_text.style.display = "none";
                svg.style.transform = "rotate(0deg)"
            }
        });


        if (num === 0) {
            text.style.display = "none";
            icon.style.transform = "rotate(0deg)";
            box.classList.remove("active");
            num = 1;
        } else {
            text.style.display = "block";
            icon.style.transform = "rotate(180deg)";
            num = 0;
            box.classList.add("active");
        }
    });
});