console.log("AUTH FILE LOADED");

async function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    document.getElementById("loginError").textContent = "";

    try {

        const result = await api(
            "login",
            "POST",
            {
                username,
                password
            }
        );

        console.log("LOGIN RESULT:");
        console.log(result);

        if (result.ok) {

            localStorage.setItem("loggedIn", "true");

            if (result.result) {

                localStorage.setItem(
                    "displayName",
                    result.result.displayName || username
                );

                localStorage.setItem(
                    "username",
                    result.result.username || username
                );

                localStorage.setItem(
                    "isAdmin",
                    String(result.result.isAdmin)
                );

                const welcome =
                    document.getElementById("welcomeUser");

                if (welcome) {

                    welcome.textContent =
                        "خوش آمدید " +
                        (result.result.displayName || username);

                }

            }

            document.getElementById("loginPage").style.display = "none";
            document.getElementById("dashboard").style.display = "block";

        } else {

            document.getElementById("loginError").textContent =
                result.error || "نام کاربری یا رمز عبور اشتباه است.";

        }

    } catch (err) {

        console.error(err);

        document.getElementById("loginError").textContent =
            "ارتباط با سرور برقرار نشد.";

    }

}

function logout() {

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("displayName");
    localStorage.removeItem("username");
    localStorage.removeItem("isAdmin");

    document.getElementById("dashboard").style.display = "none";
    document.getElementById("loginPage").style.display = "block";

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("loginError").textContent = "";

}