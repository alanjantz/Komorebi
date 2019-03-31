function getParameterByName(name) {
    var urlParams = new URLSearchParams(window.location.search);
    var param = urlParams.get(name);

    return param;
}

function redirectToAnime(name) {
    var newUrl = 'animes/' + getParameterByName(name);

    if (!newUrl.endsWith('.html'))
        newUrl += '.html'

    newUrl += '?anime=' + getParameterByName(name);

    var iframeElement = document.getElementById('iframeDetails');

    if (getParameterByName('min') != null && getParameterByName('min') != undefined && getParameterByName('min') == 1)
        newUrl += "&min=1"

    iframeElement.src = newUrl;

}

function changeAnimeLink(paramName, animeLink) {
    var anime = getParameterByName(paramName);
    console.log(anime);

    if (anime == null)
        return;

    document.getElementById(animeLink).setAttribute("href", "../details.html?anime=" + anime);
}

function createTable(episodios) {
    $('#content').append('<table id="episodiosList" cellspacing="0px"><thead><tr></tr></thead><tbody></tbody></table>');

    $.each(episodios, function (index, jsonObject) {
        if (Object.keys(jsonObject).length > 0) {
            var tableRow = '<tr>';
            $.each(Object.keys(jsonObject), function (i, key) {
                tableRow += '<td>' + jsonObject[key] + '</td>';
            });
            tableRow += "</tr>";
            $('#episodiosList tbody').append(tableRow);
        }
    });
}

function changeBackgroundPage(anime) {
    var element = document.getElementById('image-background');

    element.style.background = "url('resources/images/wallpapers/" + anime + ".png') center";
}