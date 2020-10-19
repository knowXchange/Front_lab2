<template>
    <div style="margin: 0 auto; width: 70%">
        <h1 class="p-text-center"> Hola {{rol}}</h1>  
        <DataTable :value="cursos" :paginator="true" :rows="10">
            <Column field="id" header="ID"></Column>
            <Column field="courseName" header="Curso"></Column>
            <Column field="durationHours" header="Duracion"></Column>
        </DataTable>      
        <router-view/>
    </div>    
</template>
<script>
import axios from 'axios';
export default {
    name: "seeCourses",
    data(){
        return{
            cursos: null,
            pathEstudiante: "/registro/consultar-cursos-como-estudiante?access_token=",
            pathDocente: "/registro/consultar-cursos-como-profesor?access_token=",
            rol: null
        }
        
    },
    mounted(){
        const rolesPath = '/roles';
        axios
            .get( this.$store.state.backURL + rolesPath )
            .then(data=>{console.log(data)});
        console.log(localStorage.getItem( 'token'));
        axios.get( this.$store.state.backURL+this.pathEstudiante+localStorage.getItem( 'token')).then(data=>{
            if(Object.entries(data.data).length==0)
                axios.get( this.$store.state.backURL+this.pathDocente+localStorage.getItem( 'token')).then(
                    data=>{
                        this.cursos = data.data;
                        this.rol="Profesor";
                        console.log(data);
                    }
                )
            else {
                this.cursos = data.data;
                this.rol = "Estudiante";
                console.log(data);
            }
        });
    }
}
</script>
<style>

</style>