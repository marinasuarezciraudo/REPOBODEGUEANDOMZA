//function capturarDatos(){
  //  let inputEmail = document.getElementById('email');
    //let formulario = document.querySelector('form');
   // }

   // formulario.addEventListener('enviar'), function(evento) {
     //   evento.preventDefault();
        // Código para validar el formulario
        // Código para enviar los datos del formulario
       // console.log(inputEmail.value)
      //  }
        //let usuario= {
          //  email: inputEmail.value
           // }

            window.addEventListener('load', function(e){

                let usuariosLocalStorage = localStorage.getItem('usuariosContacto');
                // console.log(usuariosLocalStorage);
             
                let usuariosContacto;
             
                if(usuariosLocalStorage === null){
                    usuariosContacto = [];
                } else {
                    usuariosContacto = JSON.parse(usuariosLocalStorage);
                }
             
                let formulario = document.getElementById("form-bbianchi");
                let email= document.querySelector('#email');
                let nombre= document.querySelector('#nombre');
                let mensaje= document.querySelector('#textareaMensaje');
                // console.log(formulario, email, nombre, mensaje);
                
                formulario.addEventListener('submit', function (captura){
                   captura.preventDefault();
             
                   // console.log (email.value);
                    let usuario = {
                        nombre: '',
                        email: '',
                        mensaje: '',
                        bodega: 'Bianchi'
                    };
            
                    if(email.value != ''){
                        usuario.email = email.value;
                    }
            
                    if(nombre.value != ''){
                        usuario.nombre = nombre.value;
                    }
            
                    if(mensaje.value != ''){
                        usuario.mensaje = mensaje.value;
                    }
                
                    // console.log(usuario)
                    if(usuario.nombre != ''){
                        usuariosContacto.push(usuario)
                    }
                   
                    // console.log(usuariosContacto)
                   localStorage.setItem('usuariosContacto', JSON.stringify(usuariosContacto));
            
                   email.value = '';
                   nombre.value = '';
                   mensaje.value = '';
                })
             })
     