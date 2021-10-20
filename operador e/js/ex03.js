function verificar() {
    var renda = Number(renda_usuario.value);
    var renda_familiar = Number(total_familia.value);

    if(renda<=1050 && renda_familiar<=2100){
        alert("Você terá direito!");
    }else{
        alert("Você não terá direito!");
    }
}