// Listas de palabras ampliadas
let sujetos = ["Mis pensamientos", "Mi corazón", "Mis sueños", "Mi amor", "Mis días", "Mis noches", "Mis deseos", "Mis esperanzas"];
let verbos = ["anhelan", "buscan", "admiran", "aman", "desean", "sueñan con", "necesitan", "aprecian"];
let objetos = ["tu dulzura", "tu sonrisa", "tu mirada", "tu esencia", "tu risa", "tu voz", "tu amabilidad", "tu inteligencia"];
let adverbios = ["apasionadamente", "tiernamente", "profundamente", "sinceramente", "devotamente", "fervientemente", "constantemente", "eternamente"];

// Función para obtener un elemento aleatorio de una lista
function obtenerAleatorio(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

// Función para generar el poema
function generarPoema() {
    let sujeto = obtenerAleatorio(sujetos);
    let verbo = obtenerAleatorio(verbos);
    let objeto = obtenerAleatorio(objetos);
    let adverbio = obtenerAleatorio(adverbios);
    return `${sujeto} ${verbo} ${objeto} ${adverbio}.`;
}

// Función para mostrar el poema en la página
function mostrarPoema() {
    let poema = generarPoema();
    document.getElementById('poema').innerText = poema;
    document.getElementById('copy-btn').style.display = 'block';
    document.getElementById('clear-btn').style.display = 'block';
}

document.getElementById('copy-btn').addEventListener('click', function() {
    let poema = document.getElementById('poema');
    let textArea = document.createElement("textarea");
    textArea.value = poema.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('poema').innerText = '';
    document.getElementById('copy-btn').style.display = 'none';
    this.style.display = 'none';
});