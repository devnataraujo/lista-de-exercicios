function validacao(){
    var email = txt_email.value;
    var arroba = email.indexOf('@');

    if(arroba > -1){
        exibir.innerHTML = `Email válido`;
    }else{
        exibir.innerHTML = `Email inválido`;
    }
}