import { ReactNode } from 'react';
import tw from "twin.macro";

export const StyledCard = tw.div`
 bg-white rounded-3xl cursor-pointer hover:rounded-3xl hover:bg-slate-100 shadow-md m-1 w-1/4 sm:w-full md:w-1/4`
; 

type Props = {
  children: ReactNode
}

export const CardPokemon = ({children}:Props) => {
   return (
     <StyledCard>
         {children}
     </StyledCard>
   )
 }