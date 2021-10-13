function validacao(){
    var nome = txt_nome.value;
    var count = nome.length;
   if(count >= 10){
       exibir.innerHTML = `Nome ok`;
   }else{
       exibir.innerHTML = `Nome deve ter pelo menos 10 letras"`;
   }
}