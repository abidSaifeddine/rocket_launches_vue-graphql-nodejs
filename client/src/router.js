import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Launches",
            component: () =>
                import("./components/LaunchesComponent.vue")
        },
        {
            path: "/details/:flight_number",
            name: "Details",
            component: () =>
                import("./components/DetailsComponent.vue")
        }
    ]
});
