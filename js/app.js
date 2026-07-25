console.log("App Started");

loadListings();

window.onload = function () {

    const loggedIn =
        localStorage.getItem("loggedIn");

    if (loggedIn === "true") {

        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboard").style.display = "block";

        const displayName =
            localStorage.getItem("displayName");

        const welcome =
            document.getElementById("welcomeUser");

        if (welcome) {

            welcome.textContent =
                "خوش آمدید " +
                (displayName || "");

        }

    } else {

        document.getElementById("loginPage").style.display = "block";
        document.getElementById("dashboard").style.display = "none";

    }

};