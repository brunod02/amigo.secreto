// Variables globales
let listaNombres = [];
let maximoDeNombres = 10;


// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombre = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }
    
    // Validar que no se exceda el máximo de nombres
    if (listaNombres.length >= maximoDeNombres) {
        alert(`Ya has agregado el máximo de ${maximoDeNombres} nombres permitidos`);
        return;
    }
    
    // Validar que el nombre no esté duplicado
    if (listaNombres.includes(nombre)) {
        alert('Este nombre ya está en la lista');
        return;
    }
    
    // Agregar el nombre a la lista
    listaNombres.push(nombre);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la visualización de la lista
    mostrarLista();
    
    // Enfocar el campo de entrada para facilitar la entrada de más nombres
    inputAmigo.focus();
}

// Función para mostrar la lista de nombres
function mostrarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    listaNombres.forEach((nombre, index) => {
        let li = document.createElement('li');
        li.textContent = `${index + 1}. ${nombre}`;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    
    // Validar que haya nombres en la lista
    if (listaNombres.length === 0) {
        alert('No hay nombres en la lista. Agrega algunos amigos primero.');
        return;
    }
    
    // Validar que haya al menos 2 nombres para el sorteo
    if (listaNombres.length < 2) {
        alert('Necesitas al menos 2 nombres para hacer el sorteo');
        return;
    }
    
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
    let amigoSeleccionado = listaNombres[indiceAleatorio];
    
    // Mostrar el resultado
    resultado.innerHTML = `<li> ¡${amigoSeleccionado} es tu amigo secreto! </li>`;
    
}













