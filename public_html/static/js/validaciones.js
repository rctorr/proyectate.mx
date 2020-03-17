function validarPass() {
    var contrasenia = document.getElementById("contrasenia").value;
    var expReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    var comparacion = expReg.test(contrasenia);
    
    if(comparacion == false){
        alert("La contraseña debe tener como minimo una minuscula, una mayuscula, un numero y como minimo 8 caracteres");
        return false;
    }
    else {
        return true;
    }
}
//Termina validar  contrasenia*/
           

function validarContraseniaIgual()
{ 
    var contrasenia = document.getElementById("contrasenia");
    var contrasenia2 = document.getElementById("contrasenia2");    
    
    if (pcontrasenia != contrasenia2) {
      alert("Las contraseñas no coinciden");
    } 

}//Termina validar registo
      

