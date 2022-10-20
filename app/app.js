const formularios = document.querySelectorAll("form")
const fechaDetencion = document.querySelector('#fechaDet');
const fechaLibertad = document.querySelector('#fechaLib');
const resultadoDet = document.querySelector('#resultadoDet')
const resultadoTotalDet = document.querySelector('#resultadoTotalDet')
const tiempoRestante = document.querySelector('#tiempoRestante')
const fechaActualComp = document.querySelector('#fechaComp')
const condenaAnios = document.querySelector("#anios");
const condenaMes = document.querySelector("#mes");
const condenaDias = document.querySelector("#dias");
const agotamientoPena = document.querySelector('#agotamientoPena')
const periodos = document.querySelector('#periodosDet')



const boton1 = document.querySelector('#calcularDet');
const boton2 = document.querySelector('#agregar')
const boton3 = document.querySelector('#calcularCond')
const boton4 = document.querySelector('#calcularAgot')
const boton5 = document.querySelector('#reset')


const pContentDetencion = document.createTextNode(" ");
const pContentCondenaRestante = document.createTextNode(" ");
const pContentAgotamiento = document.createTextNode(" ");
const pContentTotalDet = document.createTextNode(" ");



let resultadoProvisorio = 0;
let diasAcumulados = 0;
let detencionPeriodo;
let condena = [];

fechaDetencion.addEventListener('input',calculoDet)
fechaLibertad.addEventListener('input',calculoDet)

boton1.addEventListener('click', calculoDias)
boton2.addEventListener('click', agregarP)
boton3.addEventListener('click', calcularTiempoRestante)
boton4.addEventListener('click', calcularAgotamiento)
boton5.addEventListener('click', resetForm)
// diasProvisorio 


function calculoDet(){
    let fecha1 = 0
    let fecha2 = 0
    var aFecha1 = fechaDetencion.value.split('-');
    aFecha1[2] = Number(aFecha1[2]);
    aFecha1[1] = Number(aFecha1[1]*30);
    aFecha1[0] = Number(aFecha1[0]*360)
    fecha1 +=aFecha1.reduce((a,b) => a+b, 0)
    var aFecha2 = fechaLibertad.value.split('-');
    aFecha2[2] = Number(aFecha2[2]);
    aFecha2[1] = Number(aFecha2[1]*30);
    aFecha2[0] = Number(aFecha2[0]*360)
    fecha2 += aFecha2.reduce((a,b) => a+b, 0)
    var fecha3 = fecha2 - fecha1;
    if(fecha3 === 0){
        fecha3 = 1;
    }
    var dias = fecha3;
    resultadoProvisorio = dias;
    if (dias % 360 === 0){
        if(Math.floor(dias/360) === 1){
            detencion = `${Math.floor(dias/360)} año`
        }else{
            detencion = `${Math.floor(dias/360)} años`
        }
    } else if (dias > 360 && dias % 30 === 0){
        if(Math.floor(dias/360) > 1 && Math.floor((dias%360)/30) > 1){
            detencion = `${Math.floor(dias/360)} años y ${Math.floor((dias%360)/30)} meses`
        }else if (Math.floor(dias/360) > 1 && Math.floor((dias%360)/30) === 1){
            detencion = `${Math.floor(dias/360)} años y ${Math.floor((dias%360)/30)} mes`
        }else if (Math.floor(dias/360) === 1 && Math.floor((dias%360)/30) > 1){
            detencion = `${Math.floor(dias/360)} año y ${Math.floor((dias%360)/30)} meses`
        }else{
            detencion = `${Math.floor(dias/360)} año y ${Math.floor((dias%360)/30)} mes`
        }
    } else if (dias > 360){
        if(Math.floor(dias/360) > 1 && Math.floor((dias%360)/30) > 1){
            detencion = `${Math.floor(dias/360)} años, ${Math.floor((dias%360)/30)} meses y ${(dias%360)%30} día/s`
        }else if(Math.floor(dias/360) > 1 && Math.floor((dias%360)/30) === 1){
            detencion = `${Math.floor(dias/360)} años, ${Math.floor((dias%360)/30)} mes y ${(dias%360)%30} día/s`
        }else if(Math.floor(dias/360) > 1 && Math.floor((dias%360)/30) === 0){
            detencion = `${Math.floor(dias/360)} años y ${(dias%360)%30} día/s`
        }else{
            detencion = `${Math.floor(dias/360)} año y ${(dias%360)%30} día/s`
        }
    } else if (dias > 30){
        if(Math.floor(dias/30) > 1){
            detencion = `${Math.floor(dias/30)} meses y ${dias%30} día/s`
        }else{
            detencion = `${Math.floor(dias/30)} mes y ${dias%30} día/s`
        }
    } else if (dias % 30 === 0){
        if(dias/30 > 1){
            detencion = `${dias/30} meses`;
        }else{
            detencion = `${dias/30} mes`;
        }
    } else if (dias < 30){
        detencion = `${dias} día/s`;
    }
    pContentDetencion.nodeValue = detencion;
    resultadoDet.appendChild(pContentDetencion);
    detencionPeriodo = detencion;
}

function agregarP() {
    if(fechaDetencion.value.trim().length === 0 || fechaLibertad.value.trim(0)-length === 0){
        return
    }
    let periodo = document.createElement("li")
    let pPeriodo = document.createTextNode(" ");
    pPeriodo.nodeValue = fechaDetencion.value + " a " + fechaLibertad.value + " = " + detencion;
    periodo.appendChild(pPeriodo)
    periodos.appendChild(periodo)
    diasAcumulados += resultadoProvisorio
    formularios[0].reset()
}

function calculoDias(){
    let dias = diasAcumulados;
    if (dias % 360 === 0){
        if(Math.floor(dias/360) === 1){
            detencion = `${Math.floor(dias/360)} año`
        }else{
            detencion = `${Math.floor(dias/360)} años`
        }
    } else if (dias > 360 && dias % 30 === 0){
        if(Math.floor(dias/360) > 1 && Math.floor((dias%360)/30) > 1){
            detencion = `${Math.floor(dias/360)} años y ${Math.floor((dias%360)/30)} meses`
        }else if (Math.floor(dias/360) > 1 && Math.floor((dias%360)/30) === 1){
            detencion = `${Math.floor(dias/360)} años y ${Math.floor((dias%360)/30)} mes`
        }else if (Math.floor(dias/360) === 1 && Math.floor((dias%360)/30) > 1){
            detencion = `${Math.floor(dias/360)} año y ${Math.floor((dias%360)/30)} meses`
        }else{
            detencion = `${Math.floor(dias/360)} año y ${Math.floor((dias%360)/30)} mes`
        }
    } else if (dias > 360){
        if(Math.floor(dias/360) > 1 && Math.floor((dias%360)/30) > 1){
            detencion = `${Math.floor(dias/360)} años, ${Math.floor((dias%360)/30)} meses y ${(dias%360)%30} día/s`
        }else if(Math.floor(dias/360) > 1 && Math.floor((dias%360)/30) === 1){
            detencion = `${Math.floor(dias/360)} años, ${Math.floor((dias%360)/30)} mes y ${(dias%360)%30} día/s`
        }else if(Math.floor(dias/360) > 1 && Math.floor((dias%360)/30) === 0){
            detencion = `${Math.floor(dias/360)} años y ${(dias%360)%30} día/s`
        }else{
            detencion = `${Math.floor(dias/360)} año y ${(dias%360)%30} día/s`
        }
    } else if (dias > 30){
        if(Math.floor(dias/30) > 1){
            detencion = `${Math.floor(dias/30)} meses y ${dias%30} día/s`
        }else{
            detencion = `${Math.floor(dias/30)} mes y ${dias%30} día/s`
        }
    } else if (dias % 30 === 0){
        if(dias/30 > 1){
            detencion = `${dias/30} meses`;
        }else{
            detencion = `${dias/30} mes`;
        }
    } else if (dias < 30){
        detencion = `${dias} día/s`;
    }
    pContentTotalDet.nodeValue = detencion;
    resultadoTotalDet.appendChild(pContentTotalDet);
}


function calcularTiempoRestante(){
    condena = [condenaDias.value, condenaMes.value, condenaAnios.value]
    condena[0] = Number(condena[0]);
    condena[1] = Number(condena[1]*30);
    condena[2] = Number(condena[2]*360);
    condena = condena.reduce((a,b) => a+b, 0);
    pendiente = 0;
    let resto = condena - diasAcumulados;
    if (resto % 360 === 0){
        condena = []
        condena[0] = Math.floor(resto/360)
        condena[1] = 0
        condena[2] = 0
        if(condena[0] > 1){
            pendiente = `${condena[0]} años`
        }else{
            pendiente = `${condena[0]} año`
        }
    } else if (resto > 360 && resto % 30 === 0){
        condena = []
        condena[0] = Math.floor(resto/360)
        condena[1] = Math.floor((resto%360)/30)
        condena[2] = 0
        if(condena[0] > 1 && condena[1] > 1){
            pendiente = `${condena[0]} años y ${condena[1]} meses`
        }else if(condena[0] === 1 && condena[1] > 1){
            pendiente = `${condena[0]} año y ${condena[1]} mes/meses`
        }else{
            pendiente = `${condena[0]} año y ${condena[1]} meses`
        }
    } else if (resto > 360){
        condena = []
        condena[0] = Math.floor(resto/360)
        condena[1] = Math.floor((resto%360)/30)
        condena[2] = (resto%360)%30
        if(condena[0] > 1 && condena[1] > 1){
            pendiente = `${condena[0]} años, ${condena[1]} meses y ${condena[2]} día/s`
        }else if(condena[0] === 1 && condena[1] > 1){
            pendiente = `${condena[0]} años, ${condena[1]} mes y ${condena[2]} día/s`
        }else{
            pendiente = `${condena[0]} año, ${condena[1]} mese y ${condena[2]} día/s`
        }
    } else if (resto > 30 && resto % 30 !== 0){
        condena = []
        condena[0] = 0
        condena[1] = Math.floor(resto/30)
        condena[2] = resto%30
        if(condena[1] > 1){
            pendiente = `${condena[1]} meses y ${condena[2]} días`
        }else{
            pendiente = `${condena[1]} mes y ${condena[2]} días`
        }
    } else if (resto % 30 === 0){
        condena = []
        condena[0] = 0
        condena[1] = resto/30
        condena[2] = 0
        if(condena[1] > 1){
            pendiente = `${condena[1]} meses`;
        }else{
            pendiente = `${condena[1]} mes`;
        }
    } else if (resto < 30){
        condena = []
        condena[0] = 0
        condena[1] = 0
        condena[2] = resto
        pendiente = `${condena[2]} días`;
    } 
    pContentCondenaRestante.nodeValue = `${pendiente}`;
    tiempoRestante.appendChild(pContentCondenaRestante);
    formularios[1].reset()
}

function calcularAgotamiento(){
    var fechaActual = fechaActualComp.value.split('-');
    fechaActual[0] = Number(fechaActual[0]);
    fechaActual[1] = Number(fechaActual[1]);
    fechaActual[2] = Number(fechaActual[2]);
    fechaActual.reverse()
    cumplimiento = []
    cumplimiento[0] = condena[2] + fechaActual[0]
    cumplimiento[1] = condena[1] + fechaActual[1]
    cumplimiento[2] = condena[0] + fechaActual[2]
    if (cumplimiento[0] > 31){
        cumplimiento[1]++
        cumplimiento[0] -= 30
    }
    if (cumplimiento[1] > 12){
        cumplimiento[2]++
        cumplimiento[1] -= 12
    }

    if((cumplimiento[1] != 1 && cumplimiento[1] != 3 && cumplimiento[1] != 5 && cumplimiento[1] != 7 && cumplimiento[1] != 8 && cumplimiento[1] != 10 && cumplimiento[1] != 12) && cumplimiento[0] > 30){
        cumplimiento[1]++
        cumplimiento[0] -= 30
    }
    if(cumplimiento[0] > 28 && cumplimiento[1] == 2 && cumplimiento[2] % 4 != 0){
        cumplimiento[1]++
        cumplimiento[0] -= 28
    }
    if(cumplimiento[0] > 29 && cumplimiento[1] == 2 && cumplimiento[2] % 4 == 0){
        cumplimiento[1]++
        cumplimiento[0] -= 29
    }
        pContentAgotamiento.nodeValue = `la pena se agota el ${cumplimiento[0]}/${cumplimiento[1]}/${cumplimiento[2]}`;
        agotamientoPena.appendChild(pContentAgotamiento);
        formularios[2].reset()
}

function resetForm(){
    // formularios.forEach(formulario => formulario.reset())
    // resultadoProvisorio = 0;
    // diasProvisorio = 0;
    // condena = [];
    // pContentDetencion.nodeValue = " ";
    // resultadoDet.appendChild(pContentDetencion)
    // pContentCondenaRestante.nodeValue = " ";
    // tiempoRestante.appendChild(pContentCondenaRestante);
    // pContentAgotamiento.nodeValue = " ";
    // agotamientoPena.appendChild(pContentAgotamiento);
    document.location.reload();
}




