function validarPass() {
    /* Función para validar que la contraseña sea segura */
    var contrasenia = document.getElementById("contrasenia").value;
    var expReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    var comparacion = expReg.test(contrasenia);
    var error1 = document.getElementById("msjPassError1");
    
    if(comparacion == false){
        error1.style.display= "block";
    }
    else if(comparacion == true){
        error1.style.display= "none";
    }  
}

function validarPass2() {
    /* Función validar que las contraseñas sean iguales */
    var contrasenia = document.getElementById("contrasenia").value;
    var contrasenia2 = document.getElementById("contrasenia2").value;
    var error2 = document.getElementById("msjPassError2");
    
    if (contrasenia != contrasenia2) {
        error2.style.display="block";
    }
    else if(contrasenia == contrasenia2){
        error2.style.display="none";
    }
}

//document.getElementById("contrasenia2").onkeyup = function() {validarPass2()};
