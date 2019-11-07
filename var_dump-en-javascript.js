function var_dump(dato) {
    echo(typeof dato);
    let tipoDato  = typeof dato;
    let valorDato = dato;
    switch (tipoDato) {
        case 'number':
            if(valorDato%1==0){
                tipoDato = 'int';
            }else{
                tipoDato = 'float';
            }
            echo(tipoDato+'('+valorDato+')');
            break;
        case 'string':
            echo(tipoDato+'('+valorDato.length+') "'+valorDato+'"');
            break;
        case 'object':
            if(Array.isArray(valorDato)){
                tipoDato = 'array';
            }
            echo(tipoDato+'('+valorDato.length+') "'+valorDato+'"');
            break;

    }
}