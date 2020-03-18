function validarPass() {
    var contrasenia = document.getElementById("contrasenia").value;
    var expReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    var comparacion = expReg.test(contrasenia);
    var contrasenia2 = document.getElementById("contrasenia2").value;    
    
    if(comparacion == false){
        alert("La contraseña debe tener como minimo una minuscula, una mayuscula, un numero y minimo 8 caracteres");
        return false;
    }
    else {
        if (contrasenia != contrasenia2) {
            alert("Las contraseñas no coinciden");
            return false;
        } 
        return true;
    }
}
//Termina validar  contrasenia*/
           


