import { ReactNode } from 'react';
import tw from "twin.macro";

export const StyledSection = tw.section`
  flex h-screen justify-center items-center
`;

type Props = {
   children: ReactNode
}

export const AuthLayout = ({ children }: Props) => {
  return (
   <>
    <StyledSection>
         {children}
    </StyledSection>
   </>
  )
}
