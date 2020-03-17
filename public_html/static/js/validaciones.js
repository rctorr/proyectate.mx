/*(function() {
    var input = document.getElementById('contrasenia');
    var form = document.getElementById('form');
    var alerta = document.createElement('div');
            alerta.id = 'notify'';;
            alerta.style.display = 'none';
            form.appendChild(alerta);

    input.addEventListener('invalid', function(event){
        event.preventDefault();
        if ( ! event.target.validity.valid ) {
            input.className = 'invalid animated shake';
            alerta.textContent = 'La contraseña debe tener 10 caracteres conformado por al menos una letra mayuscula y un numero';
            alerta.className = 'error';
            alerta.style.display = 'block';
        }
    });

    input.addEventListener('input', function(event){
        if ( 'block' === alerta.style.display ) {
            input.className = '';
            alerta.style.display = 'none';
        }
    });

})();*/
/*https://webdesign.tutsplus.com/es/tutorials/html5-form-validation-with-the-pattern-attribute--cms-25145*/

function validarPass() {
    var contrasenia = document.getElementById("contrasenia").value;
    var expReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    var comparacion = expReg.test(contrasenia);
    var form = document.getElementById('form');
    //var alerta = document.createElement('div');
    
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
      

