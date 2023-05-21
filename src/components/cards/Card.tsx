import { ReactNode } from 'react';
import tw from "twin.macro";

export const StyledCard = tw.div`
  rounded-lg bg-white p-4 shadow-md sm:w-full md:w-1/4 `
;

type Props = {
  children: ReactNode
}

export const Card = ({children}:Props) => {
  return (
    <StyledCard>
        {children}
    </StyledCard>
  )
}