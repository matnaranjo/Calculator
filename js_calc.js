
var primerTermino=0;
var segundoTermino=0 ;
var seleccion = 0;
var termino=[];
var showTermino;
var punto = 0;
var operacion;
var resultado=0;

// Limpieza de valores en variables
function limp(){
    termino=[];
    primerTermino = 0;
    segundoTermino = 0;
    seleccion = 0;
    resultado = 0;
    showTermino = termino.join('');
    document.querySelector("#resultados").innerHTML=showTermino; 
    document.querySelector("#operaciones").innerHTML=showTermino;  
}

// Introducir puntuacion y error por 2 puntos
function puntuacion(punt){
    punto+=1;
    termino.push(punt);
    showTermino = termino.join('');
    document.querySelector("#resultados").innerHTML=showTermino;
    if (punto>1){
        primerTermino =0;
        segundoTermino =0;
        punto=0;
        operacion=0;
        termino =[];
        document.querySelector("#resultados").innerHTML="ERROR";
    }

}




// Ingreso de valores por cifra 
function ingreso (num){

    if (termino.length!=8){
        termino.push(num);
    }
    showTermino = termino.join('');
    document.querySelector("#resultados").innerHTML=showTermino;
}

// Cambio de termino a llenar y seleccion de operador
function cambio (operador){
    if (seleccion==0){
        primerTermino = termino.join('');
        if (punto!=0){
            primerTermino = parseFloat(primerTermino);
        }
        if (punto==0){
            primerTermino = parseInt(primerTermino);
        }
        seleccion = 1;
        operacion = operador;
        termino = [];
        punto = 0;
    }
    else{
        operacion=operador
    }
    
    if (operacion == "add"){
        document.querySelector("#operaciones").innerHTML=primerTermino + " + ";
    }
    if (operacion == "min"){
        document.querySelector("#operaciones").innerHTML=primerTermino + " - ";
    }
    if (operacion == "mult"){
        document.querySelector("#operaciones").innerHTML=primerTermino + " x ";
    }
    if (operacion == "div"){
        document.querySelector("#operaciones").innerHTML=primerTermino + " ÷ ";
    }
}


// Solucion de la operacion y guardado de resultado en la variable primer termino
function equ (){

    segundoTermino = termino.join('');
    if (punto!=0){
        segundoTermino = parseFloat(segundoTermino);
    }
    if(punto==0){
        segundoTermino = parseInt(segundoTermino);
    }
    termino = [];
    punto=0;

    if (operacion == "add"){
        resultado = primerTermino + segundoTermino;
        document.querySelector("#operaciones").innerHTML=primerTermino + " + " + segundoTermino;
    }
    if (operacion == "min"){
        resultado = primerTermino - segundoTermino;
        document.querySelector("#operaciones").innerHTML=primerTermino + " - " + segundoTermino;
    }
    if (operacion == "mult"){
        resultado = primerTermino * segundoTermino;
        document.querySelector("#operaciones").innerHTML=primerTermino + " x " + segundoTermino;
    }
    if (operacion == "div"){
        resultado = primerTermino / segundoTermino;
        document.querySelector("#operaciones").innerHTML=primerTermino + " ÷ " + segundoTermino;
    }
    operacion=null;
    primerTermino = resultado;
    resultado = (resultado.toString()).substr(0,17);
    document.querySelector("#resultados").innerHTML=resultado;
}





