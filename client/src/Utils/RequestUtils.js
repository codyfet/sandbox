/**
 * Обертка доя выполнения рахных http-запросов.
 *
 * @param {GET | POST | PUT | DELETE | etc.} httpMethod HTTP метод.
 * @param {string} url
 * @param {object} data
 */
const fetchWrapper = async function (httpMethod, url, data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: httpMethod, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json"
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
};

/**
 * Выполняет POST запрос.
 *
 * @param {string} url Урл.
 * @param {object} data Объект с данными для передачи на сервер.
 */
export async function postData(url, data) {
    return fetchWrapper("POST", url, data);
}

/**
 * Выполняет PUT запрос.
 *
 * @param {string} url Урл.
 * @param {object} data Объект с данными для передачи на сервер.
 */
export async function putData(url, data) {
    return fetchWrapper("PUT", url, data);
}
