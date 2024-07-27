//var respuesta = window.prompt("Descubre el corazón vitivinícola de Argentina!!!", " Si, por supuesto! Salud! 🍷​🍷​ ");
//alert ("Su respuesta fue " + respuesta);

//var sitioweb = "BodegueandoMendoza";
//var bodegas = ("BodegaBianchi" + "BodegaViamonte");


//console.log("SitioWeb: "+ sitioweb + "" + typeof sitioweb);
//console.log("Bodegas:" + bodegas + "" + typeof bodegas);

//captura de datos de formmulario de suscripcion//

  let formulario = document.getElementById("form");
  console.log(formulario);
 
 formulario.addEventListener('submit', function (captura){
  captura.preventDefault();
     let email= document.querySelector('#emailsuscrip').value;
        console.log (email);
     
  })
  
   
  