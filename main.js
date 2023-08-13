function muestra_oculta(contenido1) {
    //declaro la función y paso por parametro el selector de referencia que quiero ocultar/mostrar
    let div = document.getElementById(contenido1);
    //uso el condicional IF para saber si el DIV esta oculto (display: none) o si esta visible
    if (div.style.display == "none"){
        div.style.display = "flex";
    }
    else {
        div.style.display = "none";
    }
}