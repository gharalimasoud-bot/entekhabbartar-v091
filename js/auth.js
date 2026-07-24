console.log("AUTH FILE LOADED");
async function login(){

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    document.getElementById("loginError").textContent = "";

    try{

        const result = await api(
            "login",
            "POST",
            {
                username,
                password
            }
        );

        console.log(result);

        if (result.ok) {

         console.log(result);

            alert("ورود موفق");

}

        }else{

            document.getElementById("loginError").textContent =
                result.error || "خطا در ورود";

        }

    }catch(err){

        console.error(err);

        document.getElementById("loginError").textContent =
            "ارتباط با سرور برقرار نشد.";

    }

}