import React from "react";
const d=document,
n=navigator,
ua=n.userAgent;
//document.write(ua);
function Redirect(id){
    const $id= d.getElementById(id),
    isMobile={
        ios:() =>ua.match(/iphone|ipad|ipod/i),
        android:()=>ua.match(/android/i),
    }
     console.log(isMobile.ios);
     //redirecciones
     if(ua.match(/Mobile/i)&&ua.match(/safari/i)&&ua.match(/iphone|ipad|ipod/i)){
            //ventana modal
        //    $(function(){
          //     $('#myModal').modal()
        //    });
            window.location.href="https://m.juegashf.com/";
        // window.location.href="https://apps.apple.com/mx/app/google-chrome/id535886823";
     }
    
     if(ua.match(/Mobile/i)&&ua.match(/edge/i)&&ua.match(/iphone|ipad|ipod/i)){
        
         //ventana modal
        //    $(function(){
          //     $('#myModal').modal()
          //  });
          window.location.href="https://m.juegashf.com/";
         //window.location.href="https://apps.apple.com/mx/app/google-chrome/id535886823";
     }
    
     if(ua.match(/Mobile/i)&&ua.match(/firefox/i)&&ua.match(/iphone|ipad|ipod/i)){
         //ventana modal
           // $(function(){
             //  $('#myModal').modal()
        //    });
         window.location.href="https://m.juegashf.com/";
         //window.location.href="https://apps.apple.com/mx/app/google-chrome/id535886823";
     }
      
      
    }
 
 /*
 var agente=navigator.userAgent;
 var moviles= /iphone|ipod|ipad|android|mobile/;
 function detectar(){
    //alert ("funciona")
    console.log(navigator);
    document.write(agente+"<br />");
    
    
    var direccion;
 
    if(agente.search(moviles) >-1)
    {  
        alert("EStas en el movile")
           // direccion="https://www.google.com/";
    }
    else{
        alert("EStas en el escritorio")
        //direccion="https://juegashf.com/"
    }
   // window.location.href = direccion;
 }
 */

export default Redirect;