const routes = [
    {
        path:'/',
        redirect:'/index'
    },
    {
        path:"/index",
        name:"index",
        component:()=> import("@/views/home/index.vue")
    }
]

export default routes