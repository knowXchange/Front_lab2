import Vue from 'vue';
import Router from 'vue-router';
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import Home from "./views/Home";
import AddRole from "./components/AddRole";
import CreateCourse from "./components/CreateCourse";
import seeCourses from "./views/seeCourses"

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/registro",
      name: "signup",
      component: SignUp
    },
    {
      path: "/",
      alias: "/iniciar-sesion",
      name: "login",
      component: Login
    },
    {
      path: "/consultar-cursos",
      name: "consultarCursos",
      component: seeCourses
    },
    {
      path: "/principal",
      name: "home",
      component: Home,
      children: [
        {
          path: "nuevo-rol",
          name: "add-role",
          component: AddRole
        },
        {
          path: "profesor/crear-curso",
          name: "create-course",
          component: CreateCourse
        }

      ]
    }
  ]
})
