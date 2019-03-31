var animes =
  [
    {
      "arquivo": "b-the-beginning",
      "nome": "B: The Beginning",
    }
  ]

function appendChild(elementId) {
  var element = document.getElementById(elementId);

  for (var i = 0; i < animes.length; i++) {
    var div = document.createElement("div");
    div.innerHTML += `<button class="anime-button not-growing-padding transation-effect-05s" 
                              onclick="trazerInformacoes('details.html?anime=` + animes[i].arquivo + `&min=1')">
                        <img class="transation-effect-1s" src="resources/images/covers/` + animes[i].arquivo + `.png"/>
                      </button>`;
    div.setAttribute('class', 'list-item not-growing-padding');

    element.appendChild(div);
  }
}