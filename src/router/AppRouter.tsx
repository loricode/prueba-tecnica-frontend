import {  BrowserRouter, Routes, Route } from 'react-router-dom';

//routes
import { authRoutes } from './authRoutes';
import { dashRoutes } from './dashRoutes';

import { useGlobal } from '../context/useGlobal';

import { ProtectedRoute } from '../components/security/ProtectedRoute';
import { Navbar } from '../components/navbar/Navbar';


export const AppRouter = () => {

  const { state } = useGlobal()

   return (
    <>
      <BrowserRouter basename='/monoma'>
      { state.logout ? <Navbar /> : <div/> }

        <Routes>
              
            {authRoutes.map(item => (
                  <Route  
                    key={item.id}
                    path={item.path}
                    element={<item.element/>}/>     
            )) }
           
            {dashRoutes.map(item => (
                  <Route  
                    key={item.id}
                    path={item.path}
                    element={<ProtectedRoute><item.element/></ProtectedRoute>}/>   
              )) }
           
        </Routes>
      </BrowserRouter>
      </>
   )

}