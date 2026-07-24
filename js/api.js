console.log("API FILE LOADED");
async function api(path, method = "GET", body = null) {

    let url = CONFIG.API_URL + "?path=" + path;

    const options = {
        method,
        headers: {}
    };

    if (body) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    return await response.json();

}