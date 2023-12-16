function mostrarOpcionSeleccionada() {
    var selector = document.getElementById("opciones");
    var resultado = document.getElementById("resultado");
    var opcionSeleccionada = selector.options[selector.selectedIndex].text;

    resultado.innerHTML = "<p>Has seleccionado sin querer: <strong>" + opcionSeleccionada + "</strong></p>";
}