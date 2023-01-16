//Copnociendo el ciclo For 
function saludar(){
    var i=0;
var nombre=document.getElementById("nombre").value;
var saludo="Hola";
for(var i=0;i<3;i++){//i++ --> significa que el i se va a incrementar en 1
    var mensaje=`${saludo} ${nombre} ${i}`;
    alert(mensaje);
}
}

function saludar1(){
    var i=0;
    var nombre=document.getElementById("nombre").value;
    var saludo=["Buenos Días 🥰☀", "Buenas Tardes 🤩🌈", "Buenas Noches 🤗⭐"];
    for(var i=0;i<saludo.length;i++){//i++ --> significa que el i se va a incrementar en 1
    var mensaje=`${saludo[i]} ${nombre}`;
    alert(mensaje);
    }
}
