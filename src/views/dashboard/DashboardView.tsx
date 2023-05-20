import { Outlet } from 'react-router-dom';

//components
import { Navbar } from '../../components/navbar/Navbar';

export const DashboardView = () => {
  
  return (
    <>
      <Navbar />
      
      <Outlet/>
    </>
  )
}
