var animes =
  [
    {
      "arquivo": "b-the-beginning",
      "nome": "B: The Beginning",
    },
    {
      "arquivo": "ajin",
      "nome": "Ajin",
    }
  ]

function appendChild(elementId) {
  var element = document.getElementById(elementId);

  animes.sort(SortByName);

  for (var i = 0; i < animes.length; i++) {
    var div = document.createElement("div");
    div.innerHTML += `<button class="anime-button not-growing-padding transation-effect-05s" value="` + animes[i].nome + `" 
                              onclick="trazerInformacoes('details.html?anime=` + animes[i].arquivo + `&min=1')">
                        <img class="transation-effect-1s" src="resources/images/covers/` + animes[i].arquivo + `.png"/>
                      </button>`;
    div.setAttribute('class', 'list-item not-growing-padding');

    element.appendChild(div);
  }
}

function SortByName(x,y) {
  return ((x.nome == y.nome) ? 0 : ((x.nome > y.nome) ? 1 : -1 ));
}
