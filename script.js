// 1. Función principal: oculta todo y muestra solo la sección elegida
function mostrarSeccion(idSeccion) {
    // Buscamos todas las secciones dentro del <main>
    const secciones = document.querySelectorAll('main section');
    
    // Usamos un ciclo para ponerles "display: none" (ocultarlas)
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });
    
    // Buscamos la sección específica por su ID y la mostramos
    const seccionActiva = document.getElementById(idSeccion);
    if (seccionActiva) {
        seccionActiva.style.display = 'block';
    }
}

// 2. Función para copiar el email (muy útil para tu perfil de VA)
function copiarEmail() {
    const email = "rodriguezbryanp@gmail.com"; // RECUERDA CAMBIAR ESTO POR EL TUYO
    navigator.clipboard.writeText(email);
    
    const boton = document.getElementById("btn-copy");
    const textoOriginal = boton.innerText;
    boton.innerText = "¡Copiado! ✅";
    
    setTimeout(() => {
        boton.innerText = textoOriginal;
    }, 2000);
}

// 3. Instrucción inicial: Cuando la página cargue, mostrar "sobre-mi" por defecto
window.onload = () => {
    mostrarSeccion('About_Me');
};