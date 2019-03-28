function getParameterByName(name) {
    var urlParams = new URLSearchParams(window.location.search);
    var param = urlParams.get(name);

    return param;
}

function redirectToAnime(name) {
    var newUrl = 'p/' + getParameterByName(name);
    
    if (!newUrl.endsWith('.html'))
        newUrl += '.html'
    
    var iframeElement = document.getElementById('iframeDetails');

    if (getParameterByName('min') != null && getParameterByName('min') != undefined && getParameterByName('min') == 1)
        newUrl += "?min=1"

    iframeElement.src = newUrl;

}