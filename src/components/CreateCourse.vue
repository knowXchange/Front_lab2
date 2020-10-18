<template>
  <div class="col-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2">
    <div class="mt-5">
      <form class="border border-primary rounded form-inline" @submit="associate">

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