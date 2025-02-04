let nombreIngresado = '';
let listaDeNombres = [];
let contadorElementos = 0;

function agregarAmigo() {
    nombreIngresado = document.getElementById('amigo').value; //obtener el valor ingresado
    if (nombreIngresado == '') {
        alert('Por favor, ingrese un mombre válido'); // validacion de campo vacio
    } else {
        listaDeNombres.push(nombreIngresado); // agregar nombre a la lista
        mostrarNombreEnLista('listaAmigos', listaDeNombres[contadorElementos]); //funcion para mostrar por indice
        contadorElementos++; // aumenta el indice para mostrar el siguiente
        document.getElementById('amigo').value = ''; // limpiar input
    }
    return ;
}

function mostrarNombreEnLista(idLista, nombre) {
    let elementoParaLista = document.getElementById(idLista); //ubica elemento
    if (idLista == 'listaAmigos') {
        let nuevoLi = document.createElement('li'); //crea nuevo elemento li
        nuevoLi.textContent = nombre; // asigna el nombre al elemento li
        elementoParaLista.appendChild(nuevoLi); //agrega el elemento li
    } else {
        elementoParaLista.innerHTML = nombre;
    }
    return;
}
//console.log(nombreIngresado);
function sortearAmigo() {
    let indiceAleatorio = parseInt(Math.random()*(listaDeNombres.length-1));
    mostrarNombreEnLista('resultado', `El amigo secreto sorteado es: ${listaDeNombres[indiceAleatorio]}`);
    return;
}
