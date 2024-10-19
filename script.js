function alertCarrinho(){
    alert("Produto adcionado no carrinho com sucesso!");

}
function alertForm() {
    alert("Formulário enviado com sucesso!")

}


function changeTema() {
    var cabeca = document.getElementById("cabeca");
    var corpo = document.getElementById("corpo");
    var corCabeca = "#dda37a"; // cor de referência

    // Verifica se a cor de fundo é igual à cor de referência
    if (cabeca.style.backgroundColor === corCabeca || (getComputedStyle(cabeca).backgroundColor === "rgb(221, 163, 122)")) { // Verifica em formato rgb
        cabeca.style.backgroundColor = 'white';
        corpo.style.backgroundColor = corCabeca;
    } else {
        corpo.style.backgroundColor = 'white';
        cabeca.style.backgroundColor = corCabeca;
    }
}