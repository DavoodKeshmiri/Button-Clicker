function loginLogoutSwitcher() {
    let x = document.getElementById("loginBtnn");
    if (x.innerText == "Logout") {
        x.innerText = "Login";
    } else {
        x.innerText = "Logout";
    };
};

function btnVanisher() {
    let y = document.getElementById("addDefBtn");
    if (y.style.visibility = "visible") {
        y.style.visibility = 'hidden';
    }
}


var count = 13;
function topBtnCounter() {
    count += 1;
    document.getElementById("clickme").innerHTML = count + " Likes";
    alert("Ninja was liked")
};

var count2 = 34;
function topBtnCounter2() {
    count2 += 1;
    document.getElementById("count2").innerHTML = count2 + " Likes";
};
