//              FORMULARIOS
const formularios = document.querySelectorAll("form")


//                         Primer Recuadro

//Pena Maxima
const tentDiasMax = document.querySelector('#tentDiasMax');
const tentMesesMax = document.querySelector('#tentMesesMax');
const tentAniosMax = document.querySelector('#tentAniosMax');

//Pena Minima 
const tentDiasMin = document.querySelector('#tentDiasMin');
const tentMesesMin = document.querySelector('#tentMesesMin');
const tentAniosMin = document.querySelector('#tentAniosMin');

//botones

const calcularTent = document.querySelector('#calcularTent');

//resultado

const condenaTent = document.querySelector('#condenaTent')

//                            Segundo Recuadro

//Pena Maxima
const concDiasMax = document.querySelector('#concDiasMax');
const concMesesMax = document.querySelector('#concMesesMax');
const concAniosMax = document.querySelector('#concAniosMax');

//Pena Minima 
const concDiasMin = document.querySelector('#concDiasMin');
const concMesesMin = document.querySelector('#concMesesMin');
const concAniosMin = document.querySelector('#concAniosMin');

//botones
const agregarPena = document.querySelector('#agregarPena');
const calcularConc = document.querySelector('#calcularConc');


//resultado

const condenaConc = document.querySelector('#condenaConc')

//boton reset

const reset = document.querySelector('#reset')


//Nodos

const nTentCondena = document.createTextNode(" ");
const nConcCondena = document.createTextNode(" ");

//Eventos

calcularTent.addEventListener('click',tentativa)
agregarPena.addEventListener('click',agregar)
calcularConc.addEventListener('click',calcularConcurso)

reset.addEventListener('click',resetForm)

//Variables

let penasMaximas = [];
let penasMinimas = []

//Funciones

function tentativa() {
   
        minAnios = tentAniosMin.value;
        minMeses = tentMesesMin.value;
        minDias = tentDiasMin.value;
        maxAnios = tentAniosMax.value;
        maxMeses = tentMesesMax.value;
        maxDias = tentDiasMax.value;
        menores = (Number(minAnios)*360) + (Number(minMeses)*30) + (Number(minDias));
        maximos = (Number(maxAnios)*360) + (Number(maxMeses)*30) + (Number(maxDias));
        minimoMaximo = 2*(menores/3);
        sumaMaximos = (maximos)/2;
        if (minimoMaximo % 360 === 0){
            if(Math.floor(minimoMaximo/360) === 1){
                minimoMaximo = `${Math.floor(minimoMaximo/360)} año`
            }else{
                minimoMaximo = `${Math.floor(minimoMaximo/360)} años`
            }
        } else if (minimoMaximo > 360 && minimoMaximo % 30 === 0){
            if(Math.floor(minimoMaximo/360) > 1 && Math.floor((minimoMaximo%360)/30) > 1){
                minimoMaximo = `${Math.floor(minimoMaximo/360)} años y ${Math.floor((minimoMaximo%360)/30)} meses`
            }else if (Math.floor(minimoMaximo/360) > 1 && Math.floor((minimoMaximo%360)/30) === 1){
                minimoMaximo = `${Math.floor(minimoMaximo/360)} años y ${Math.floor((minimoMaximo%360)/30)} mes`
            }else if (Math.floor(minimoMaximo/360) === 1 && Math.floor((minimoMaximo%360)/30) > 1){
                minimoMaximo = `${Math.floor(minimoMaximo/360)} año y ${Math.floor((minimoMaximo%360)/30)} meses`
            }else{
                minimoMaximo = `${Math.floor(minimoMaximo/360)} año y ${Math.floor((minimoMaximo%360)/30)} mes`
            }
        } else if (minimoMaximo > 360){
            if(Math.floor(minimoMaximo/360) > 1 && Math.floor((minimoMaximo%360)/30) > 1){
                minimoMaximo = `${Math.floor(minimoMaximo/360)} años, ${Math.floor((minimoMaximo%360)/30)} meses y ${(minimoMaximo%360)%30} día/s`
            }else if(Math.floor(minimoMaximo/360) > 1 && Math.floor((minimoMaximo%360)/30) === 1){
                minimoMaximo = `${Math.floor(minimoMaximo/360)} años, ${Math.floor((minimoMaximo%360)/30)} mes y ${(minimoMaximo%360)%30} día/s`
            }else if(Math.floor(minimoMaximo/360) > 1 && Math.floor((minimoMaximo%360)/30) === 0){
                minimoMaximo = `${Math.floor(minimoMaximo/360)} años y ${(minimoMaximo%360)%30} día/s`
            }else{
                minimoMaximo = `${Math.floor(minimoMaximo/360)} año y ${(minimoMaximo%360)%30} día/s`
            }
        } else if (minimoMaximo % 30 === 0){
            if(minimoMaximo/30 > 1){
                minimoMaximo = `${minimoMaximo/30} meses`;
            }else{
                minimoMaximo = `${minimoMaximo/30} mes`;
            }
        } else if (minimoMaximo > 30){
            if(Math.floor(minimoMaximo/30) > 1){
                minimoMaximo = `${Math.floor(minimoMaximo/30)} meses y ${minimoMaximo%30} día/s`
            }else{
                minimoMaximo = `${Math.floor(minimoMaximo/30)} mes y ${minimoMaximo%30} día/s`
            }
        } else if (minimoMaximo < 30){
            minimoMaximo = `${minimoMaximo} día/s`;
        }
        if (sumaMaximos % 360 === 0){
            if(Math.floor(sumaMaximos/360) === 1){
                sumaMaximos = `${Math.floor(sumaMaximos/360)} año`
            }else{
                sumaMaximos = `${Math.floor(sumaMaximos/360)} años`
            }
        } else if (sumaMaximos > 360 && sumaMaximos % 30 === 0){
            if(Math.floor(sumaMaximos/360) > 1 && Math.floor((sumaMaximos%360)/30) > 1){
                sumaMaximos = `${Math.floor(sumaMaximos/360)} años y ${Math.floor((sumaMaximos%360)/30)} meses`
            }else if (Math.floor(sumaMaximos/360) > 1 && Math.floor((sumaMaximos%360)/30) === 1){
                sumaMaximos = `${Math.floor(sumaMaximos/360)} años y ${Math.floor((sumaMaximos%360)/30)} mes`
            }else if (Math.floor(sumaMaximos/360) === 1 && Math.floor((sumaMaximos%360)/30) > 1){
                sumaMaximos = `${Math.floor(sumaMaximos/360)} año y ${Math.floor((sumaMaximos%360)/30)} meses`
            }else{
                sumaMaximos = `${Math.floor(sumaMaximos/360)} año y ${Math.floor((sumaMaximos%360)/30)} mes`
            }
        } else if (sumaMaximos > 360){
            if(Math.floor(sumaMaximos/360) > 1 && Math.floor((sumaMaximos%360)/30) > 1){
                sumaMaximos = `${Math.floor(sumaMaximos/360)} años, ${Math.floor((sumaMaximos%360)/30)} meses y ${(sumaMaximos%360)%30} día/s`
            }else if(Math.floor(sumaMaximos/360) > 1 && Math.floor((sumaMaximos%360)/30) === 1){
                sumaMaximos = `${Math.floor(sumaMaximos/360)} años, ${Math.floor((sumaMaximos%360)/30)} mes y ${(sumaMaximos%360)%30} día/s`
            }else if(Math.floor(sumaMaximos/360) > 1 && Math.floor((sumaMaximos%360)/30) === 0){
                sumaMaximos = `${Math.floor(sumaMaximos/360)} años y ${(sumaMaximos%360)%30} día/s`
            }else{
                sumaMaximos = `${Math.floor(sumaMaximos/360)} año y ${(sumaMaximos%360)%30} día/s`
            }
        } else if (sumaMaximos % 30 === 0){
            if(sumaMaximos/30 > 1){
                sumaMaximos = `${sumaMaximos/30} meses`;
            }else{
                sumaMaximos = `${sumaMaximos/30} mes`;
            }
        } else if (sumaMaximos > 30){
            if(Math.floor(sumaMaximos/30) > 1){
                sumaMaximos = `${Math.floor(sumaMaximos/30)} meses y ${sumaMaximos%30} día/s`
            }else{
                sumaMaximos = `${Math.floor(sumaMaximos/30)} mes y ${sumaMaximos%30} día/s`
            }
        } else if (sumaMaximos < 30){
            sumaMaximos = `${sumaMaximos} día/s`;
        }
        nTentCondena.nodeValue = ` ${minimoMaximo} a ${sumaMaximos}`;
        condenaTent.appendChild(nTentCondena);

}

function agregar(){
    penasMinimas.push((Number(concAniosMin.value)*360) + (Number(concMesesMin.value)*30) + (Number(concDiasMin.value)))
    penasMaximas.push((Number(concAniosMax.value)*360) + (Number(concMesesMax.value)*30) + (Number(concDiasMax.value)))
    formularios[1].reset()
}

function calcularConcurso(){

    let minimoMaximo = Math.max(...penasMinimas);

    if (minimoMaximo % 360 === 0){
        if(Math.floor(minimoMaximo/360) === 1){
            minimoMaximo = `${Math.floor(minimoMaximo/360)} año`
        }else{
            minimoMaximo = `${Math.floor(minimoMaximo/360)} años`
        }
    } else if (minimoMaximo > 360 && minimoMaximo % 30 === 0){
        if(Math.floor(minimoMaximo/360) > 1 && Math.floor((minimoMaximo%360)/30) > 1){
            minimoMaximo = `${Math.floor(minimoMaximo/360)} años y ${Math.floor((minimoMaximo%360)/30)} meses`
        }else if (Math.floor(minimoMaximo/360) > 1 && Math.floor((minimoMaximo%360)/30) === 1){
            minimoMaximo = `${Math.floor(minimoMaximo/360)} años y ${Math.floor((minimoMaximo%360)/30)} mes`
        }else if (Math.floor(minimoMaximo/360) === 1 && Math.floor((minimoMaximo%360)/30) > 1){
            minimoMaximo = `${Math.floor(minimoMaximo/360)} año y ${Math.floor((minimoMaximo%360)/30)} meses`
        }else{
            minimoMaximo = `${Math.floor(minimoMaximo/360)} año y ${Math.floor((minimoMaximo%360)/30)} mes`
        }
    } else if (minimoMaximo > 360){
        if(Math.floor(minimoMaximo/360) > 1 && Math.floor((minimoMaximo%360)/30) > 1){
            minimoMaximo = `${Math.floor(minimoMaximo/360)} años, ${Math.floor((minimoMaximo%360)/30)} meses y ${(minimoMaximo%360)%30} día/s`
        }else if(Math.floor(minimoMaximo/360) > 1 && Math.floor((minimoMaximo%360)/30) === 1){
            minimoMaximo = `${Math.floor(minimoMaximo/360)} años, ${Math.floor((minimoMaximo%360)/30)} mes y ${(minimoMaximo%360)%30} día/s`
        }else if(Math.floor(minimoMaximo/360) > 1 && Math.floor((minimoMaximo%360)/30) === 0){
            minimoMaximo = `${Math.floor(minimoMaximo/360)} años y ${(minimoMaximo%360)%30} día/s`
        }else{
            minimoMaximo = `${Math.floor(minimoMaximo/360)} año y ${(minimoMaximo%360)%30} día/s`
        }
    } else if (minimoMaximo % 30 === 0){
        if(minimoMaximo/30 > 1){
            minimoMaximo = `${minimoMaximo/30} meses`;
        }else{
            minimoMaximo = `${minimoMaximo/30} mes`;
        }
    } else if (minimoMaximo > 30){
        if(Math.floor(minimoMaximo/30) > 1){
            minimoMaximo = `${Math.floor(minimoMaximo/30)} meses y ${minimoMaximo%30} día/s`
        }else{
            minimoMaximo = `${Math.floor(minimoMaximo/30)} mes y ${minimoMaximo%30} día/s`
        }
    } else if (minimoMaximo < 30){
        minimoMaximo = `${minimoMaximo} día/s`;
    }
    let sumaMaximos = penasMaximas.reduce((a,b) => a+b, 0)
    if (sumaMaximos % 360 === 0){
        if(Math.floor(sumaMaximos/360) === 1){
            sumaMaximos = `${Math.floor(sumaMaximos/360)} año`
        }else{
            sumaMaximos = `${Math.floor(sumaMaximos/360)} años`
        }
    } else if (sumaMaximos > 360 && sumaMaximos % 30 === 0){
        if(Math.floor(sumaMaximos/360) > 1 && Math.floor((sumaMaximos%360)/30) > 1){
            sumaMaximos = `${Math.floor(sumaMaximos/360)} años y ${Math.floor((sumaMaximos%360)/30)} meses`
        }else if (Math.floor(sumaMaximos/360) > 1 && Math.floor((sumaMaximos%360)/30) === 1){
            sumaMaximos = `${Math.floor(sumaMaximos/360)} años y ${Math.floor((sumaMaximos%360)/30)} mes`
        }else if (Math.floor(sumaMaximos/360) === 1 && Math.floor((sumaMaximos%360)/30) > 1){
            sumaMaximos = `${Math.floor(sumaMaximos/360)} año y ${Math.floor((sumaMaximos%360)/30)} meses`
        }else{
            sumaMaximos = `${Math.floor(sumaMaximos/360)} año y ${Math.floor((sumaMaximos%360)/30)} mes`
        }
    } else if (sumaMaximos > 360){
        if(Math.floor(sumaMaximos/360) > 1 && Math.floor((sumaMaximos%360)/30) > 1){
            sumaMaximos = `${Math.floor(sumaMaximos/360)} años, ${Math.floor((sumaMaximos%360)/30)} meses y ${(sumaMaximos%360)%30} día/s`
        }else if(Math.floor(sumaMaximos/360) > 1 && Math.floor((sumaMaximos%360)/30) === 1){
            sumaMaximos = `${Math.floor(sumaMaximos/360)} años, ${Math.floor((sumaMaximos%360)/30)} mes y ${(sumaMaximos%360)%30} día/s`
        }else if(Math.floor(sumaMaximos/360) > 1 && Math.floor((sumaMaximos%360)/30) === 0){
            sumaMaximos = `${Math.floor(sumaMaximos/360)} años y ${(sumaMaximos%360)%30} día/s`
        }else{
            sumaMaximos = `${Math.floor(sumaMaximos/360)} año y ${(sumaMaximos%360)%30} día/s`
        }
    } else if (sumaMaximos % 30 === 0){
        if(sumaMaximos/30 > 1){
            sumaMaximos = `${sumaMaximos/30} meses`;
        }else{
            sumaMaximos = `${sumaMaximos/30} mes`;
        }
    } else if (sumaMaximos > 30){
        if(Math.floor(sumaMaximos/30) > 1){
            sumaMaximos = `${Math.floor(sumaMaximos/30)} meses y ${sumaMaximos%30} día/s`
        }else{
            sumaMaximos = `${Math.floor(sumaMaximos/30)} mes y ${sumaMaximos%30} día/s`
        }
    } else if (sumaMaximos < 30){
        sumaMaximos = `${sumaMaximos} día/s`;
    }
    nConcCondena.nodeValue = `${minimoMaximo} a ${sumaMaximos}`;
    condenaConc.appendChild(nConcCondena);

}


function resetForm(){

    document.location.reload();
}
