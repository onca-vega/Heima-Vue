import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Index = () => import("./../components/index/Index.vue");
const Login = () => import("./../components/index/login/Login.vue");

const Home = () => import("./../components/home/Home.vue");
const Dashboard = () => import("./../components/home/dashboard/Dashboard.vue");
const Test = () => import("./../components/home/test/Test.vue");

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Index,
      meta: { name: "Index" },
      children: [
        {
          path: "/",
          name: "login",
          component: Login,
          meta: { name: "Login" }
        }
      ]
    },
    {
      path: "/home",
      component: Home,
      meta: { name: "Home", auth: true },
      children: [
        {
          path: "/",
          name: "dashboard",
          component: Dashboard,
          meta: {
            name: "Dashboard",
            auth: true,
            breadcrumb: []
          }
        },
        {
          path: "/test",
          name: "test",
          component: Test,
          meta: {
            name: "Test",
            auth: true,
            breadcrumb: [
              { label: "Inicio", name: "dashboard" },
              { label: "Test", name: null }
            ]
          }
        }
      ]
    },
    { path: "*", redirect: "/" }
  ]
});
router.beforeEach((to, from, next) => {
  router.app.$nextTick(() => {
    // const token = router.app.$children[0].getToken();
    // if(!token && to.meta.auth){
    //   next({ name: "login" });
    // }
    // else if(token && !to.meta.auth){
    //   next({ name: "dashboard" });
    // }
    // else{
      next();
    // }
  });
});
export { router };
