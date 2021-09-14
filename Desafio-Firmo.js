const parametro1 = "teste1";
const parametro2 = "teste2";
const parametro3 = "teste3";


const parametros = {
    parametro1: parametro1,
    parametro2: parametro2,
    parametro3: parametro3
};

const objtoString = JSON.stringify(parametros);
console.log(typeof objtoString);
console.log(objtoString);

const objJSON = JSON.parse(objtoString);
console.log(typeof objJSON);
console.log(objJSON);
