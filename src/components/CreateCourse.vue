<template>
  <div class="col-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2">
    <div class="mt-5">
      <form class="border border-primary rounded form-inline" @submit="createCourse">

        <h2 class="col-12 text-center text-primary mt-3 mb-5">Crear un nuevo curso</h2>

        <div class="form-group col-12">
          <label for="course_name" class="custom-label col-md-3">Nombre del curso</label>
          <input id="course_name" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="text"
                 placeholder="Nombre del curso" v-model="course_name" required/>
          
          <label for="duration_hours" class="custom-label col-md-3">Duración del curso</label>
          <input id="duration_hours" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="number"
                 placeholder="Duración en horas" v-model="duration_hours" required/>

        </div>
        <div class="col-12 mb-3">
          <button class="col-sm-6 col-md-4 offset-sm-5 offset-md-7 btn btn-primary" type="submit">
            Crear curso
          </button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>

  import axios from 'axios'

  const path = '/profesor/crear-curso?access_token=';

  export default {
    name: "CreateCourse",
    data( ){
      return{
        course_name: '',
        duration_hours: 0,
      }
    },
    beforeCreate( ){
      const rolesPath = '/roles';
      axios
        .get( this.$store.state.backURL + rolesPath )
        .then( response => {
          if( response.status !== 200 ){
            alert( "Error en la petición. Intente nuevamente" )
          }else{
            this.roles = response.data;
          }
        }).catch( response => {
          alert( "No es posible conectar con el backend en este momento" );
        });
    },
    methods:{
      createCourse( event ){
        axios
          .post( this.$store.state.backURL + path + localStorage.getItem( 'token' ),
            {
              courseName: this.course_name,
              durationHours: this.duration_hours
            }
          ).then( response => {
            if( response.status !== 201 ){
              alert( "Error en el almacenamiento del usuario" )
            }else{
              alert( "Curso creado correctamente" )
              this.$router.push('/principal')
            }
          }).catch( error =>{
            if( error.response.status === 400 ){
              alert( "Parece que ya existe un usuario con el nombre de usuario \"" + this.username + "\"" );
            }else{
              alert( "Error en la aplicación" );
            }
          });
        event.preventDefault( );
        return true;
      }
    }
  }
</script>

<style scoped>
  .form-inline{
    width: auto;
  }

  .form-inline .form-group{
    margin-bottom: 1rem;
  }

  .custom-label{
    display: inline-block;
    justify-content: right !important;
    text-align: right !important;
  }

  @media (max-width: 767px) {
    .custom-label{
      display: none !important;
    }
  }
</style>
