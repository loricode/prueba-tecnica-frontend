import { HomeView } from '../views/dashboard/home/HomeView';
import { DetailView } from '../views/dashboard/detail/DetailView';
import { ProfileView } from '../views/dashboard/profile/ProfileView';

export const dashRoutes =  [
   {
      id:'1',
      path:'home',
      element:HomeView
   },
   {
      id:'2',
      path:'detail',
      element: DetailView,
   },
   {
      id:'2',
      path:'profile',
      element: ProfileView,
   },
]