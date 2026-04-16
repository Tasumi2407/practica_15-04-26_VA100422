var canvas_tres = document.getElementById("lienzo_tres");
var canvas_cuatro = document.getElementById("lienzo_cuatro");
var canvas_cinco= document.getElementById("lienzo_cinco");
var canvas_seis = document.getElementById("lienzo_seis");

if(canvas_tres.getContext){
    console.log("si soporta contexto");

    var ctx_3=canvas_tres.getContext("2d");
    ctx_3.fillStyle = "rgb(200,0,0)";
    ctx_3.fillRect(10,10,55,50);

    ctx_3.fillStyle = "rgba(0,0,200,0.5)";
    ctx_3.fillRect(30,30,55,50);

    ctx_3.fillStyle = "rgba(0,200,0,0.5)";
    ctx_3.fillRect(50,50,55,50);
}else{
    console.log("No se soporta el contexto 3");
}


if(canvas_cuatro.getContext){
    console.log("si soporta contexto");

    var ctx_4 = canvas_cuatro.getContext("2d");
    ctx_4.beginPath();
    ctx_4.moveTo(5,5);
    ctx_4.lineTo(125,125);
    ctx_4.strokeStyle = "#FFF";
    ctx_4.stroke();

}


if(canvas_cinco.getContext){
    console.log("si soporta contexto");
}


if(canvas_seis.getContext){
    console.log("si soporta contexto");
}