function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get(name);

    return param;
}

function redirectToAnime(name) {
    var newUrl = 'p/' + getParameterByName(name) + '.html';
    var iframeElement = document.getElementById('iframeDetails');
    iframeElement.src = newUrl;
}