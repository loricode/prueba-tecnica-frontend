import { HomeView } from '../views/home/HomeView';
import { DetailView } from '../views/home/detail/DetailView';
import { ProfileView } from '../views/home/profile/ProfileView';

export const dashRoutes =  [
   {
      id:'1',
      path:'/home',
      element: HomeView,
   },
   {
      id:'2',
      path:'/detail',
      element: DetailView,
   },
   {
      id:'2',
      path:'/profile',
      element: ProfileView,
   },
]