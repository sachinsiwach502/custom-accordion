let acord_item = document.querySelectorAll(".accord-part");

acord_item.forEach(element => {
    let box = element.querySelector("#box");
    let icon = element.querySelector("#svg");
    let text = element.querySelector(".txt");
    let full_box = element.querySelector("#full_box");
    let num = 0;

    element.addEventListener("click", () => {
        if (num === 0) {
            icon.style.transform = "rotate(180deg)";
            text.style.display = "none";
            num = 1;
        } else {
            icon.style.transform = "rotate(0deg)";
            text.style.display = "block";
            num = 0;
        }
    });
});



