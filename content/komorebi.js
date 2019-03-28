function appendChild(elementId, number)
{
var element = document.getElementById(elementId);

    for (var i = 0; i < number; i++) 
    {
        var div = document.createElement("div");
        div.innerHTML += `<button class="anime-button not-growing-padding transation-effect-05s" onclick="trazerInformacoes('details.html?anime=1')">
                            <img class="transation-effect-1s" src="http://i.imgur.com/wHAtAJ4.png"/>
                          </button>`;
        div.setAttribute('class', 'list-item not-growing-padding');

        element.appendChild(div);
    }
}