function send2()
{
var nombres=document.getElementById("nombre").value;
var apellido=" " + document.getElementById("apellido").value;

console.log(nombres + " "+ apellido);

var nombrecompleto= nombres.concat(apellido);
console.log(nombrecompleto);

document.getElementById("nombre_completo").innerHTML= nombrecompleto;
document.getElementById("longitud_nombre_completo").innerHTML= nombrecompleto.length;

var longitud= nombrecompleto.length;
sumale= Number(longitud+3);
console.log(sumale);

var multiplicale= Number(sumale*2);
console.log(multiplicale);

var sumalecuatro= Number(multiplicale+4);
console.log(sumalecuatro);

var dividir = Number(sumalecuatro/2);
console.log(dividir);

var restar = Number(dividir-longitud);
console.log(restar);

if(restar==5){
    document.getElementById ("correcto").innerHTML ="Lo hiciste muy bien" 
   
}

var longitud= nombrecompleto.length;
octavo= Number(longitud/8);
console.log (Math.round (octavo));
document.getElementById("resultado_entre_8").innerHTML= (Math.round(octavo));

var chico = Math.random ();
console.log(chico);
document.getElementById("random_number").innerHTML= (Math.round(chico));

document.getElementById("random_number_entero").innerHTML= (Math.round(chico));





}