function brincar() {
    var idade = Number(input_idade.value);
    var peso = Number(input_peso.value);

    if(idade<=15 && peso>100){
        result.innerHTML = `<p style="color:red">Você não poderá brincar</p>`;
    }else{
        result.innerHTML = `<p style="color:blue">Você poderá brincar</p>`;
    }
}