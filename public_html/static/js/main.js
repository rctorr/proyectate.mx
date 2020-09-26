function leftClick(obj) {
    var container = $(obj).parent();
    var viewerClass = ('.Carousel-viewer');
    var sliderClass = ('.Carousel-slider');
    var itemClass = ('.Carousel-item');
    var itemNum = container.find(itemClass).length;
    var root = document.documentElement;
    var slider = container.find(sliderClass);

    root.style.setProperty('--carousel-num-items', itemNum);
    slider.css('transform', "translateX("+ 0 +"px)");    
}

function rightClick(obj) {
    var container = $(obj).parent();
    var viewerClass = ('.Carousel-viewer');
    var sliderClass = ('.Carousel-slider');
    var itemClass = ('.Carousel-item');
    var itemNum = container.find(itemClass).length;
    var root = document.documentElement;
    var slider = container.find(sliderClass);

    root.style.setProperty('--carousel-num-items', itemNum);
    slider.css('transform', "translateX("+ -190 +"px)");    
}

/* Funciones para accional el menú lateral en la página de módulos */
function muestra_sidebar() {
    var sidebar = document.getElementById("sidebar");
    
    sidebar.style.transform = "translateX(0px)";
}
function oculta_sidebar() {
    var sidebar = document.getElementById("sidebar");
    var ancho = window.innerWidth;
    
    if (ancho < 768) {  /* Sólo ocultamos la barra lateral cuando son móviles */
        sidebar.style.transform = "translateX(-100%)";
    }
}