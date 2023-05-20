import { ReactNode } from 'react';
import tw from "twin.macro";

export const StyledCard = tw.div`
  rounded bg-white p-2 shadow-md`
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