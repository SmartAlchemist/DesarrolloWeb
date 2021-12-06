function coincidir(){
    var contrasena = document.getElementById("contrasena");
    var ValidarContrasena = document.getElementById("ValidarContrasena");
    var aviso = document.getElementById("aviso");
    var Registrar = document.getElementById("Registrar");

    Registrar.disabled = true; //boton de registro desactivado

    if(contrasena.value.length == 0 || ValidarContrasena.value.length == 0){
        aviso.innerHTML = "Ninguna de las contraseñas pueden quedar vacías";
        aviso.style.color = "#ff7b00";
        Registrar.disabled = true;

    }else if(contrasena.value != ValidarContrasena.value){
        aviso.innerHTML = "Las contraseñas no coinciden";
        aviso.style.color = "red";
        Registrar.disabled = true;

    }else{
        aviso.innerHTML = "Las contraseñas coinciden";
        aviso.style.color = "green";
        Registrar.disabled = false;
    }

}


Vue.component('form-registro',{

    data(){
        return{

            id:"",
            nombre:"",
            apellido:"",
            genero:"",
            usuario:"",
            fecha:"",
            correo:"",
            contrasena:"",
            validar:"",
            
        }
    },

    template:`
    
    <div>

    <main class="mb-4" id="InicioSesion">
            <form @submit.prevent="guardarCliente" id="registroUsuarios">
                <svg class="mb-3" xmlns="http://www.w3.org/2000/svg" width="72" height="57" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
                    <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                  </svg>
                <div class="mb-3" id="title"><h1>Bienvenido a <br> Smart Alchemist</h1></div>

                <div class="mb-3"><h5>Ingrese sus datos para realizar el registro</h5></div>

                <br>

                <div class="mb-3">
                  <label for="numero" class="form-label">Número de documento</label>
                  <input type="number" class="form-control" id="number" name="number" required="" v-model="id">
                </div>

                <div class="form-group">
                  <div class="col-sm-5" id="nombre">
                    <label for="firstName" class="form-label">Nombres</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" v-model="nombre">
                  </div>
                  <div class="col-sm-5">
                    <label for="lastName" class="form-label">Apellidos</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" v-model="apellido">
                  </div>
                </div>
                
                <br><hr>

                <div class="mb-3">
                  <label for="genero" class="form-label">Género</label>
                  <input type="text" class="form-control" id="genero" name="genero" required="" v-model="genero">

                </div>

                <hr><br>

                <div class="mb-3">
                  <label for="usuario" class="form-label">Ingrese su usuario</label>
                  <input type="text" class="form-control" id="usuario" name="usuario" required="" v-model="usuario">
                </div>

                <div class="mb-3">
                  <label for="email" class="form-label">Ingrese su email</label>
                  <input type="email" class="form-control" id="email" name="email" required="" v-model="correo">
                </div>

                <div class="mb-3">
                  <label for="fn" class="form-label">Fecha de Nacimiento</label>
                  <input type="date" class="form-control" id="fn" name="fn" required="" v-model="fecha">
                </div>

                <div class="mb-3">
                  <label for="contrasena" class="form-label">Contraseña</label>
                  <input type="password" class="form-control" id="contrasena" name="contrasena" onkeyup="coincidir()" v-model="contrasena">
                </div>

                <div class="mb-3">
                  <label for="ValidarContrasena" class="form-label">Confimar contraseña</label>
                  <input type="password" class="form-control" id="ValidarContrasena" name="ValidarContrasena" onkeyup="coincidir()" v-model="validar">
                </div>

                <br>
                <br>
                <label class="form-label" id="aviso"></label>

                <br>
                <br>

                <button type="submit" class="btn btn-primary" id="Registrar" disabled="">Registrarse</button>

                
              </form>

        </main>

    </div>
    `,

    methods:{
        guardarCliente(){
            const endpoint="http://localhost:8080/cliente";
            const opciones={
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({id:this.id, nombre:this.nombre, apellido:this.apellido, genero:this.genero, usuario:this.usuario, fecha:this.fecha, correo:this.correo, contrasena:this.contrasena, validar:this.validar })
            };

            fetch(endpoint,opciones).then(async response=>{

              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Usuario guardado',
                showConfirmButton: false,
                timer: 2000
              })

              document.getElementById('registroUsuarios').reset();
    
            });
            
        }

    }

})

Vue.component('ver-usuarios', {

    data(){
        return{
          nombreBuscar:"",
          datos:[],
          
        }
    },

    template:`

    <div>

        <label>Nombre del usuario </label> <br><br>
        <div class="input">
          <input type="text" class="form-control mb-3" v-model="nombreBuscar">
          <input type="button" class="btn btn-primary" value="BUSCAR" v-on:click="buscarUsuario">
       </div>
       <br><br>

      <table class="table">
       <thead class="table-dark">
         <tr>
           <th>Cédula</th>
           <th>Nombre</th>
           <th>Apellido</th>
           <th>Género</th>
           <th>Usuario</th>
           <th>Fecha de nacimiento</th>
           <th>Correo</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="cliente in datos">
           <td>{{cliente.id}}</td>
           <td>{{cliente.nombre}}</td>
           <td>{{cliente.apellido}}</td>
           <td>{{cliente.genero}}</td>
           <td>{{cliente.usuario}}</td>
           <td>{{cliente.fecha}}</td>
           <td>{{cliente.correo}}</td>
         </tr>
       </tbody>
     </table>
    </div>

    `,

    methods:{
        buscarUsuario(){
            const endpoint="http://localhost:8080/cliente/buscar/"+this.nombreBuscar;
            const opciones={method:'GET'};

            fetch(endpoint,opciones).then(async response=>
                {
                  this.datos= await response.json();
                  
                });
        },
        
    }
})

Vue.component('eliminar',{
  data(){
    return{
      idEliminar:"",
      datos:[],

    }
  },

  template:`
  <div>
   <label>Documento del usuario </label> <br><br>
   <div class="input">
     <input type="text" class="form-control mb-3" v-model="idEliminar">
     <input type="button" class="btn btn-danger" value="ELIMINAR" v-on:click="eliminarUsuario">
   </div>
  </div>
  `,

  methods:{
    eliminarUsuario(){
      const endpoint="http://localhost:8080/cliente/"+this.idEliminar;
      const opciones={method:'DELETE'};

      fetch(endpoint,opciones).then(async response=>{

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuario eliminado',
            showConfirmButton: false,
            timer: 2000
          })
        
      });

    }
  }
})

Vue.component('contenidos',{

  data(){
    return{

    }
  },

  template:`
   <div>
     <main class="container">
        <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark" id="caja1">
          <div class="col-md-6 px-0">
            <h1 class="display-4 fst-italic">Historia de la Tabla Periódica</h1>
            <p class="lead my-3">La tabla periódica es un sistema de organización de los elementos químicos que se consolidó a partir de diferentes investigaciones en la época moderna.</p>
            <p class="lead mb-0"><a href="#" class="text-white fw-bold">Aprende más ....</a></p>
          </div>
        </div>
        <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark" id="caja1">
          <div class="col-md-6 px-0">
            <h1 class="display-4 fst-italic">Estructura de la Tabla Periódica</h1>
            <p class="lead my-3">La tabla periódica es un sistema de organización de los elementos químicos que está organizada en grupos y períodos</p>
            <p class="lead mb-0"><a href="#" class="text-white fw-bold">Aprende más ....</a></p>
          </div>
        </div>
        <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark" id="caja1">
          <div class="col-md-6 px-0">
            <h1 class="display-4 fst-italic">Clasificación de los Elementos Químicos</h1>
            <p class="lead my-3">Los elementos químicos se clasifican en metales, no metales y metaloides. Adicionalmente, cada grupo presenta unas propiedades características.  </p>
            <p class="lead mb-0"><a href="#" class="text-white fw-bold">Aprende más ....</a></p>
          </div>
        </div>
      </main>
    </div>
  `,

  methods:{

  }

})


new Vue({
    el:"#app",
    data(){
        return{
          menu:"0",
            
        }
    }
})
