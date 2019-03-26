var title = document.querySelector('.main-title');
title.textContent = 'Aparecida Nutricionista'; //altera o conteúdo da tag h1 

title.addEventListener('click', function(){

    console.log('olha a bait');

});

function imcCalc(pacientData){
    
    var tdPeso = pacientData.querySelector('.info-peso'); //busca no pacient o elemento peso
    var peso = tdPeso.textContent;

    var tdAltura = pacientData.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var lineImc = pacientData.querySelector('.info-imc');

    var pesoCheck = validatePeso(peso);
    var alturaCheck = validateAltura(altura);

    if(!pesoCheck){
        console.log('peso invalido');
        pesoCheck = false;
        lineImc.textContent = 'peso invalido';
        pacientData.classList.add('invalid-pacient');  
    }

    if (!alturaCheck){
        console.log('altura invalida');
        alturaCheck = false;
        lineImc.textContent = 'altura invalida';
        pacientData.classList.add('invalid-pacient');  
    }

    if (pesoCheck  && alturaCheck){

        var imc = valorImc(peso, altura);
        lineImc.textContent = imc;

    }

}

function validatePeso(peso){

    if (peso >= 0 && peso <= 300){

        return true;

    }else{

        return false;

    }
    
}

function validateAltura(altura){

    if(altura >= 0 && altura <=3.00){

        return true;

    }else{

        return false;

    }

}

function valorImc(peso, altura){

    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);

}

var pacient = document.querySelectorAll('.pacient');

for(i=0; i < pacient.length; i++){

    imcCalc(pacient[i]);

}