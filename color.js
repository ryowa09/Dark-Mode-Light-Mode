const body = document.getElementsByTagName("body")[0]

function darkMode() {
    if (body.style.backgroundColor === "rgb(23, 23, 23)") {
        body.style.backgroundColor = "white";
        button.style.boxShadow = "";
    }
    else {
        body.style.backgroundColor = "#171717";
        button.style.boxShadow = "0px 4px 10px rgba(255, 255, 255, 1)";
    }
}