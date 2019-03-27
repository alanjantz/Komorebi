function appendChild(elementId, number)
{
var element = document.getElementById(elementId);

    for (var i = 0; i < number; i++) 
    {
        var div = document.createElement("div");
        div.innerHTML += '<button class="anime-button not-growing-padding transation-effect-05s" onclick="trazerInformacoes(\'p\/1.html\')"><img src="http://i.imgur.com/wHAtAJ4.png"/></button>';
        div.setAttribute('class', 'list-item not-growing-padding');
        console.log(div);
        element.appendChild(div);
    }
}