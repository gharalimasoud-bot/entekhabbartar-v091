console.log("LISTINGS FILE LOADED");

let listings = [];

async function loadListings() {

    try {

        const result = await api(
            "listings",
            "GET"
        );

        console.log("LISTINGS API");
        console.log(result);

        if (!result.ok) {

            console.error(result.error);

            return;

        }

        listings = result.result || [];

        renderListings();

    }

    catch (err) {

        console.error(err);

    }

}

function renderListings() {

    const container =
        document.getElementById("listingContainer");

    if (!container) {

        return;

    }

    container.innerHTML = "";

    if (listings.length === 0) {

        container.innerHTML = `

            <div class="empty-list">

                هیچ فایلی ثبت نشده است.

            </div>

        `;

        return;

    }

    listings.forEach(item => {

        const card = document.createElement("div");

        card.className = "listing-card";

        card.innerHTML = `

            <h3>

                ${item["نوع ملک"] || "-"}

            </h3>

            <p>

                <strong>کد:</strong>

                ${item["کد ملک"] || "-"}

            </p>

            <p>

                <strong>مالک:</strong>

                ${item["نام مالک"] || "-"}

            </p>

            <p>

                <strong>محله:</strong>

                ${item["محله"] || "-"}

            </p>

            <p>

                <strong>زمین:</strong>

                ${item["متراژ زمین"] || "-"}

            </p>

            <p>

                <strong>بنا:</strong>

                ${item["متراژ بنا"] || "-"}

            </p>

            <p>

                <strong>عرض:</strong>

                ${item["عرض"] || "-"}

            </p>

            <p>

                <strong>قیمت:</strong>

                ${formatPrice(item["قیمت کل"])}

            </p>

        `;

        container.appendChild(card);

    });

}

function formatPrice(value) {

    if (!value || value === "") {

        return "-";

    }

    const number =
        Number(
            String(value)
                .replace(/,/g, "")
        );

    if (isNaN(number)) {

        return value;

    }

    return number.toLocaleString("fa-IR");

}