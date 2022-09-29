function letraounumero (A){
return (isNaN(A));
    }

function media (nota1,nota2,nota3){
   
    let total = 0;
    let final = 0;
total = nota1+nota2+nota3;
final = total / 3;
    return final
}

function FGTS(salarioLiq) {
let acresFGTS = 0;
let resultado = 0;


    acresFGTS = salarioLiq * 0.11;
    resultado = acresFGTS.toFixed(2)
   return parseFloat(resultado)
}









module.exports = {letraounumero,media,FGTS}