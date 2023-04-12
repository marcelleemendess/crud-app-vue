import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
    { 
        path: '/',
        alias:'/tasks', //point also to the tasklist route
        name:'tasks',
        component: () => import('@/components/TaskList.vue'),
    },
    { 
        path: '/tasks/new',
        alias: '/tasks/new',
        name:'tasks-new',
        component: () => import('@/components/TaskForm.vue'),
    },
    { 
        path: '/tasks/:id',
        alias: '/tasks/:id',
        name:'task-details',
        component: () => import('@/components/TaskDetail.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;