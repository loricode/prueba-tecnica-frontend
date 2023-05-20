import {  BrowserRouter, Routes, Route } from 'react-router-dom';

//routes
import { authRoutes } from './authRoutes';
import { dashRoutes } from './dashRoutes';

//components
import { ProtectedRoute } from '../components/security/ProtectedRoute';
import { DashboardView  } from '../views/dashboard/DashboardView';

export const AppRouter = () => {

   return (
    <>
      <BrowserRouter basename='/monoma'>

        <Routes>
              
            {authRoutes.map(item => (
                  <Route  
                    key={item.id}
                    path={item.path}
                    element={<item.element/>}/>     
            )) }

            <Route path='/dashboard'
             element={<ProtectedRoute><DashboardView /></ProtectedRoute>}>
           
             {dashRoutes.map(item => (
                  <Route  
                    key={item.id}
                    path={item.path}
                    element={<item.element/>}/>   
              )) }
            </Route> 
           
        </Routes>
      </BrowserRouter>
      </>
   )

}