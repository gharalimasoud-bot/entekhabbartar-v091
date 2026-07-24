console.log("API FILE LOADED");

async function api(path, method = "GET", body = null) {

    let url = CONFIG.API_URL + "?path=" + encodeURIComponent(path);

    if (method === "GET") {

        const response = await fetch(url);
        return await response.json();

    }

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body || {})
    });

    return await response.json();

}