const Home = { template:  template["../components/home.component.html"]};
const About = { template: template["../components/about.component.html"]};
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

const app = Vue.createApp({})
app.use(router)
app.mount('#app')


function fetchTemplate(componentName) {
  var ajax = new XMLHttpRequest();
  ajax.open("GET", "./components/" + componentName + ".component.html", false);
  ajax.send();
  return ajax.responseText;
}