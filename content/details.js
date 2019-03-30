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

function createTable(paramName) {
    var anime = getParameterByName(paramName);

    console.log(anime);

    var object = [
        {
            "Ep": 1,
            "Nome": "rooter",
            "Assistido": "12345",
        },
        {
            "Ep": 2,
            "Nome": "rooter",
            "Assistido": "12345",
        },
        {
            "Ep": 3,
            "Nome": "rooter",
            "Assistido": "12345",
        },
        {
            "Ep": 4,
            "Nome": "rooter",
            "Assistido": "12345",
        }
    ];

    $('#content').append('<table id="episodiosList"><thead><tr></tr></thead><tbody></tbody></table>');

    $.each(object, function (index, jsonObject) {
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