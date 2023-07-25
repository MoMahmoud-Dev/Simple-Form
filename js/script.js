// var x = document.querySelector("h1");
// var btnChange = document.querySelector("button");
// var btnReset = document.querySelector(".reset");
// btnChange.addEventListener('click', change = () => {
//     x.classList.toggle("red");
// })
// btnReset.addEventListener('click', change = () => {
//     x.classList.toggle("txt");
// });
// var result = document.querySelector(".result");
// setInterval(() => {
//     var x = new Date();
//     result.innerHTML = x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();

// }, 1000)
var myUsername = document.querySelector(".myUsername");
var myPassword = document.querySelector(".myPassword");
var myTitle = document.querySelector(".myTitle");
function nextPage() {
    if (myUsername.value === "" && myPassword.value === "") {
        myTitle.innerHTML = "Complete The Data";
        return false;
    }
    if (myUsername.value === "" || myPassword.value.includes(" ") || !isNaN(myUsername.value)) {
        myTitle.innerHTML = "Invalid User name";
        return false;

    } else if (myPassword.value === "" || myPassword.value.includes(" ")) {
        myTitle.innerHTML = "Invalid Your Password";
        return false;
    } else {
        return true;

    }
}

