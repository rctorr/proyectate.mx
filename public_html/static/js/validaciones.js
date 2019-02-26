function validarForm()
{ 

//alert("Validando");    
var verificar = true;
var expRegNombre=/^[a-zA-ZÑñ\s]+$/;
var expRegEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

var formulario = document.getElementById("registro");
var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var contrasenia = document.getElementById("contrasenia");
var contrasenia2 = document.getElementById("contrasenia2");    
    
            
//VALIDACION NOMBRE
            
    if (!nombre.value){
        alert("El campo nombre es requerido");
        nombre.focus();
        verificar = false;
    }
    
    else if(!expRegNombre.exec(nombre.value)){
        alert("El campo nombre solo acepta letras y espacios en blanco");
        nombre.focus();
        verificar = false;    
    }
        
//VALIDACION EMAIL
    
    else if (!email.value){
        alert("El campo email es requerido");
        email.focus();
        verificar = false;
    }
    
    else if(!expRegEmail.exec(email.value)){
        alert("El campo email no es valido");
        nombre.focus();
        verificar = false;
    }
        
//VALIDACION CONTRASEÑAS
    else if (!contrasenia.value){
        alert("El campo contraseña es requerido");
        contrasenia.focus();
        verificar = false;
    }
    
    else if (!contrasenia2.value){
        alert("El campo contraseña 2 es requerido");
        contrasenia2.focus();
        verificar = false;
    }

    if(verificar){
        alert("Se ha enviado el formulario");
        //document.registro.submit();
    } 
    
    

           
            
            
}
           

window.onload = function()
{
    var botonEnviar;
    botonEnviar = document.getElementById("enviar");
    botonEnviar.onclick = validarForm;
}
    


            
            
            
            


    
            
    
            
            
            
            
            
     



            
            









    
