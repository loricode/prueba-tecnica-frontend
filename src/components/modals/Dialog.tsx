import { ReactElement } from 'react';
import tw from 'twin.macro';


export const StyledDialog = tw.div`
fixed top-10 z-50 ease-in duration-300 w-6/12 p-4 overflow-x-hidden overflow-y-auto inset-x-1/4 h-[calc(100%-1rem)] max-h-full`
;

interface Props {
   openModal:boolean,
   children: ReactElement
}

export const Dialog = ({ openModal, children }:Props) => {

   return (
      <StyledDialog id="defaultModal" tabIndex={-1} aria-hidden="false"
       className={` ${openModal ? 'block' : 'hidden' } `}>
         {children}
    </StyledDialog>
   )

}
