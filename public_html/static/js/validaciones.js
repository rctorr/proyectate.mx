/*function validarPass() {
    var contrasenia = document.getElementById("contrasenia").value;
    var expReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    var comparacion = expReg.test(contrasenia);
    var contrasenia2 = document.getElementById("contrasenia2").value;
    var error1 = document.getElementById("msjPassError1");
    
    if(comparacion == false){
        //alert("La contraseña debe tener como minimo una minuscula, una mayuscula, un numero y minimo 8 caracteres");
        error1.style.display= "block";
        return false;
    }
    error1.style.display= "none";
    else {
        if (contrasenia != contrasenia2) {
            //alert("Las contraseñas no coinciden");
            document.getElementById("msjPassError2").style.display = "display";
            return false;
        } 
        return true;
    }
}
//Termina validar  contrasenia*/
           
function validarPass() {
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

//document.getElementById("contrasenia2").onkeyup = function() {validarPass2()};

function validarPass2() {
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