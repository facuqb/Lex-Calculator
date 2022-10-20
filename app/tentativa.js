const prompt = require("prompt-sync")({ sigint: true })

let tentativa = () =>{
   
    console.log("Ingrese los parametros del minímo de la pena (años,meses y días)");
        minAnios = prompt("ingrese el monto minimo(años): ")
        minMeses = prompt("ingrese el monto minimo(meses): ")
        minDias = prompt("ingrese el monto minimo(días): ")
        console.log("Ingrese los parametros del máximo de la pena (años,meses y días)");
        maxAnios = prompt("ingrese el monto maximo(años): ")
        maxMeses = prompt("ingrese el monto maximo(meses): ")
        maxDias = prompt("ingrese el monto maximo(días): ")
        menores = (Number(minAnios)*360) + (Number(minMeses)*30) + (Number(minDias));
        maximos = (Number(maxAnios)*360) + (Number(maxMeses)*30) + (Number(maxDias));
        minimoMaximo = 2*(menores/3);
        sumaMaximos = (maximos)/2;
        if (minimoMaximo % 360 === 0){
            minimoMaximo = `${Math.floor(minimoMaximo/360)} año/s`
        } else if (minimoMaximo > 360 && minimoMaximo % 30 === 0){
            minimoMaximo = `${Math.floor(minimoMaximo/360)} año/s y ${Math.floor((minimoMaximo%360)/30)} mes/meses`
        } else if (minimoMaximo > 360){
            minimoMaximo = `${Math.floor(minimoMaximo/360)} año/s, ${Math.floor((minimoMaximo%360)/30)} mes/meses y ${(minimoMaximo%360)%30} días`
        } else if (minimoMaximo > 30){
            minimoMaximo = `${Math.floor(minimoMaximo/30)} mes/meses y ${minimoMaximo%30} días`
        } else if (minimoMaximo % 30 === 0){
            minimoMaximo = `${minimoMaximo/30} mes/meses`;
        } else if (minimoMaximo < 30){
            minimoMaximo = `${minimoMaximo} días`;
        } 
        if (sumaMaximos % 360 === 0){
            sumaMaximos = `${Math.floor(sumaMaximos/360)} año/s`
        } else if (sumaMaximos > 360 && sumaMaximos % 30 === 0){
            sumaMaximos = `${Math.floor(sumaMaximos/360)} año/s y ${Math.floor((sumaMaximos%360)/30)} mes/meses`
        } else if (sumaMaximos > 360){
            sumaMaximos = `${Math.floor(sumaMaximos/360)} año/s, ${Math.floor((sumaMaximos%360)/30)} mes/meses y ${(sumaMaximos%360)%30} días`
        } else if (sumaMaximos > 30){
            sumaMaximos = `${Math.floor(sumaMaximos/30)} mes/meses y ${sumaMaximos%30} días`
        } else if (sumaMaximos % 30 === 0){
            sumaMaximos = `${sumaMaximos/30} mes/meses`;
        } else if (sumaMaximos < 30){
            sumaMaximos = `${sumaMaximos} días`;
        } 
        console.log(`la pena tentada es de ${minimoMaximo} a ${sumaMaximos}`)
}

tentativa()