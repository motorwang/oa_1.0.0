import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/login.vue'], resolve)
    },
    {
      path: '/home',
      component: resolve => require(['../components/common/home.vue'], resolve),
      meta: { requiresAuth: true },
      children:[
          {
              path: '/',
              component: resolve => require(['../components/page/attendance/thisMouth.vue'], resolve)
          },
          {
            path: '/thisMouth',
            component: resolve => require(['../components/page/attendance/thisMouth.vue'], resolve)
          },
          {
            path: '/lastMouth',
            component: resolve => require(['../components/page/attendance/lastMouth.vue'], resolve)
          },
          {
            path: '/departLast',
            component: resolve => require(['../components/page/attendance/departLast.vue'], resolve)
          },
          {
            path: '/department',
            component: resolve => require(['../components/page/attendance/department.vue'], resolve)
          },
          {
            path: '/detail',
            component: resolve => require(['../components/page/attendance/detail.vue'], resolve)
          },
          {
            path: '/detailLast',
            component: resolve => require(['../components/page/attendance/detailLast.vue'], resolve)
          },
          {
            path: '/readme',
            component: resolve => require(['../components/page/readme.vue'], resolve)
          },
          {
            path: '/daily',
            component: resolve => require(['../components/page/report/daily_report.vue'], resolve)
          },
          {
            path: '/dailylist',
            component: resolve => require(['../components/page/report/daily_report_list.vue'], resolve)
          }, 
          {
            path: '/staffdaily',
            component: resolve => require(['../components/page/report/staff_daily_report.vue'], resolve)
          },
          {
            path: '/staffweekly',
            component: resolve => require(['../components/page/report/staff_weekly_report.vue'], resolve)
          },
          {
            path: '/weekly',
            component: resolve => require(['../components/page/report/weekly_report.vue'], resolve)
          },
          {
            path: '/weeklylist',
            component: resolve => require(['../components/page/report/weekly_report_list.vue'], resolve)
          }
          , 
           {
            path: '/test',
            component: resolve => require(['../components/page/test.vue'], resolve)
           }
      ]
    },
      {
        path: '*',
        component: resolve => require(['../components/common/error.vue'], resolve)
       }

  ]
})
