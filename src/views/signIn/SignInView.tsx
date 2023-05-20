import 'twin.macro'
import { Navigate } from 'react-router-dom';

import { AuthLayout } from '../../components/layouts/AuthLayout';
import { StyledCard } from '../../components/cards/Card';

import { FormSignIn } from './FormSignIn';

export const SignInView = () => {

  const hasToken = localStorage.getItem("token"); 

  if(hasToken){
     return <Navigate to="/dashboard/home" />
  }

   return (
     <>
      <AuthLayout>
         <StyledCard>
           <FormSignIn/>
         </StyledCard>
      </AuthLayout>
     </>
   )
}