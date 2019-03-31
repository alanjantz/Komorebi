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

    if (anime == null)
        return;

    document.getElementById(animeLink).setAttribute("href", "../details.html?anime=" + anime);
}

function createTable(temporadas) {

    for (var temporada = 0; temporada < temporadas.length; temporada++) {
        var idCorrente = 'episodiosList' + (temporada + 1);

        $('#content').append('<table id="' + idCorrente + '" cellspacing="0px"><thead><tr class="anime-list-header"></tr></thead><tbody></tbody></table>');

        $('#' + idCorrente + ' thead tr').append('<th>' + (temporadas[temporada].episodios.length) + '</th>');
        if (temporadas[temporada].temporada == null || temporadas[temporada].temporada == '')
            $('#' + idCorrente + ' thead tr').append('<th>Temporada ' + (temporada + 1) + '</th>');
        else
            $('#' + idCorrente + ' thead tr').append('<th>' + temporadas[temporada].temporada + '</th>');
        $('#' + idCorrente + ' thead tr').append('<th>' + (temporadas[temporada].ano) + '</th>');

        $.each(temporadas[temporada].episodios, function (index, jsonObject) {
            if (Object.keys(jsonObject).length > 0) {
                var tableRow = '<tr>';

                $.each(Object.keys(jsonObject), function (i, key) {
                    if (key == 'Assistido') {
                        if (jsonObject[key] === true)
                            tableRow += '<td class="anime-checked" title="Assistido"><img src="../resources/images/checked.png"/></td>';
                        else
                            tableRow += '<td class="anime-checked"></td>';
                    }
                    else
                        tableRow += '<td class="' + key + '">' + jsonObject[key] + '</td>';
                });

                tableRow += "</tr>";

                $('#' + idCorrente + ' tbody').append(tableRow);
            }
        });
    }
}

function changeBackgroundPage(anime) {
    var element = document.getElementById('image-background');

    element.style.backgroundImage = "url('resources/images/wallpapers/" + anime + ".png')";
}