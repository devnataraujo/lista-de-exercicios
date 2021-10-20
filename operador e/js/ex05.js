function verificar(){
    var cafe_manha = slc_cafe_manha.value;
    var almoco = slc_almoco.value;
    var jantar = slc_jantar.value;

    if(cafe_manha=="leite_arroz" && almoco=="hamburger_soja" && jantar=="picanha_soja"){
        alert("Sim, você é vegano!");
    }else{
        alert("Não, você não é vegano");
    }
}