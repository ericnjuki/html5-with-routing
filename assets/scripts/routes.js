const Home = { template:  template["../components/home.component.html"]};
const About = { 
  template: template["../components/about.component.html"],
  data() {
    return {
      sampleData: 'This is sample data about this app',
    };
  }
};
const NotFoundComponent = { template: template["../components/404.component.html"]};

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)', component: NotFoundComponent },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
