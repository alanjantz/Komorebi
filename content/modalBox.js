function trazerInformacoes(newUrl) {
    document.getElementById("modal").classList.add('ativo');
    document.getElementById("modalBox").classList.add('ativo');
    changeDetailTo(newUrl);
}

function closeModal() {
    document.getElementById("modal").classList.remove('ativo');
    document.getElementById("modalBox").classList.remove('ativo');
}

function changeDetailTo(newUrl) {
    document.getElementById('iframeDetails').src = newUrl;
}
