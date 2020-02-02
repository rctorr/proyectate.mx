
function validarPass(){
    var contrasenia = document.getElementById("contrasenia");
    var numero="0123456789";
    var minus="abcdefghyjklmnñopqrstuvwxyz";
    var mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
   // var expre = (^[A-Za-z\d$@$!%*?&]+$);
    if(contrasenia.length < 10){		
        alert("Debe contener un minimo de 10 caracateres");
    for(i=0; i<contrasenia.length; i++){
      if (mayusculas.indexOf(contrasenia.charAt(i),0)!=-1){
         alert("Debe contener al menos una letra mayuscula");
          //return 1;
      }
   }
    }
}//Termina validar  contrasenia
           

function validarContraseniaIgual()
{ 
    var contrasenia = document.getElementById("contrasenia");
    var contrasenia2 = document.getElementById("contrasenia2");    
    
    if (pcontrasenia != contrasenia2) {
      alert("Las passwords no coinciden");
      //return false;
    } 

}//Termina validar registo
            
            
            
            


    
            
    
            
            
            
            
            
     



            
            









    
