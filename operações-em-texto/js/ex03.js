function validacao() {
    var nome = txt_nome.value;
    var start = nome.startsWith(" ");
    var end = nome.endsWith(" ");
    /*var letter = nome.trimStart();
    var letter = letter.trimEnd();*/
    var letter = letter.trim();
    if(start){
        exibir.innerHTML = `Nome inválido`;

    }
    else if(end){
        exibir.innerHTML = `Nome inválido`;
    }
    else if(letter < -1){
        exibir.innerHTML = `Nome inválido`;
    }
    else{
        exibir.innerHTML = `Nome inválido`;
    }
}