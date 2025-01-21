// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//boton adicionar amigos
// sortear amigos

let amigos =[];

function agregarAmigo() {
    
    let nombre = document.getElementById("amigo").value;    
    if (nombre == "") {
        alert("Por favor, ingrese un nombre valido");
    }else{
    amigos.push(nombre); 
    document.getElementById("amigo").value = ""; //limpiar el input
    }
}  
function sortearAmigo() {
    
    
    if (amigos.length == 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos para sortear";
    }else{
        let numero = Math.floor(Math.random() * amigos.length);
        document.getElementById("resultado").innerHTML = amigos[numero]; //innerHTML es para mostrar en el html
    }
}

 


  