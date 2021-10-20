function brincar() {
    var idade = Number(input_idade.value);
    var peso = Number(input_peso.value);

    if(idade<=15 && peso>100){
        result.innerHTML = "Você não poderá brincar"
    }else{
        result.innerHTML = "Você poderá brincar"
    }
}