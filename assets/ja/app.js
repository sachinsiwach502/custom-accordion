let icon = document.querySelector("#svg");
icon.addEventListener("click", () => {

    let num = 0;
    if (num < 1) {
        icon.style.transform = "rotate(180deg)";
        console.log("if")
        return num = 1;
    } else if (num === 1) {
        icon.style.transform = "rotate(0deg)";
        console.log("else")
        return num = 0;
    }
});

// let icon = document.querySelector("#svg");
// icon.addEventListener("click", () => {
//     let value = icon.style.transform;
//     if (value === "none") {
//         value = "rotate(180deg)";
//     } else {
//         value = "rotate(0deg)";
//     }
//     icon.style.transform = value;
// });