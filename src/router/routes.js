import KbnBoardView from '@/components/templates/KbnBoardView.vue'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'
import KbnTaskDetailModal from '@/components/templates/KbnTaskDetailModal.vue'

// meta is used for setting auth required
export default [
  {
    path: '/',
    component: KbnBoardView,
    meta: {requiredAuth: true}
  },
  {
    path: '/login',
    component: KbnLoginView
  },
  {
    path: '/task/:id',
    component: KbnTaskDetailModal,
    meta: {requiredAuth: true}
  },
  {
    path: '*',
    redirect: '/'
  }
]
