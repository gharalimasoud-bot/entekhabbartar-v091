console.log("App Started");

window.onload = function () {

    if (localStorage.getItem("loggedIn") === "true") {

        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboard").style.display = "block";

    }

};