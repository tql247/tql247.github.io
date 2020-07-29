const API_HOST = 'http://192.168.1.79';
const API_PORT = '6790';
const TOKEN = "LtPhlLWPgAqyzXHUkf3Vim8UMgtP6hOu";
const textSearchPath = "/rest/v1/elastic/query/";
const imageSearchPath = "/rest/v1/milvus/query/";

function getDataByText (query) {
    var myHeaders = new Headers();
    myHeaders.append("Token", TOKEN);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`${API_HOST}:${API_PORT}${textSearchPath}?query=${query}`, requestOptions)
    .then(response => response.text())
    .then(result => {
        storeDateLocal(query, result);
        redirectToResultPage();
    })
    .catch(error => console.log('error', error));
}

function getDataByImage(imageBase64) {
    var myHeaders = new Headers();
    myHeaders.append("Token", "LtPhlLWPgAqyzXHUkf3Vim8UMgtP6hOu");

    var formdata = new FormData();
    formdata.append("image", imageBase64);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch(`${API_HOST}:${API_PORT}${imageSearchPath}`, requestOptions)
    .then(response => response.text())
    .then(result => {
        storeDateLocal('stringThatNoOneKnow', result);
        redirectToResultPage();
    })
    .catch(error => alert('error', error));
}

function storeDateLocal(key, value) {
    localStorage.clear()
    localStorage.setItem(key, value)
}