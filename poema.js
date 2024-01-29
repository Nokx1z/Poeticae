// Listas de palabras ampliadas
let sujetos = ["Mis pensamientos", "Mi corazón", "Mis sueños", "Mi amor", "Mis días", "Mis noches", "Mis deseos", "Mis esperanzas", "Mis recuerdos", "Mis emociones", "Mis sentimientos", "Mis anhelos", "Mis lágrimas", "Mis risas", "Mis suspiros", "Mis silencios", "Mis palabras", "Mis secretos", "Mis miedos", "Mis alegrías"];
let verbos = ["anhelan", "buscan", "admiran", "aman", "desean", "sueñan con", "necesitan", "aprecian", "valoran", "contemplan", "anhelan", "extrañan", "respetan", "recuerdan", "sienten", "escuchan", "ven", "tocan", "saben", "entienden"];
let objetos = ["tu dulzura", "tu sonrisa", "tu mirada", "tu esencia", "tu risa", "tu voz", "tu amabilidad", "tu inteligencia", "tu paciencia", "tu generosidad", "tu fortaleza", "tu valentía", "tu ternura", "tu pasión", "tu alma", "tu luz", "tu sombra", "tu calor", "tu frío", "tu silencio"];
let adverbios = ["apasionadamente", "tiernamente", "profundamente", "sinceramente", "devotamente", "fervientemente", "constantemente", "eternamente", "incondicionalmente", "silenciosamente", "tranquilamente", "alegremente", "tristemente", "serenamente", "rápidamente", "lentamente", "fuertemente", "suavemente", "claramente", "oscuramente"];

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