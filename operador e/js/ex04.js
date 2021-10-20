function conforto(){
    var temperatura = Number(temp_ambiente.value);

    if(temperatura>=22 && temperatura<=23 ){
        alert("Temperatura confortável!");
    }else{
        alert("Temperatura não está confortável!");
    }
}