var bodyHTML = document.body.innerHTML

document.body.onfocus = function () {
    document.body.innerHTML = bodyHTML
}

document.body.onblur = function () {
    document.body.innerHTML = ""
}