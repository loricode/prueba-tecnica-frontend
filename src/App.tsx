import { useEffect } from 'react';
import { AppRouter } from './router/AppRouter';
import { useGlobal } from './context/useGlobal';
//console.log(process.env.REACT_APP_BASEURL)

import { AuthService } from './actions/signIn/signInAction';

function App() {

  const { dispatch } = useGlobal()

  useEffect(() => {
    AuthService.service.validToken(dispatch)
  }, []);


  return (
    <AppRouter />
  );
}

export default App;
