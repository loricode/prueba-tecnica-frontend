import { useEffect } from 'react';
import { AppRouter } from './router/AppRouter';
import { useUserDispatch } from './context/store/user/UserContext';

import { AuthService } from './actions/signIn/signInAction';

function App() {

  const dispatch = useUserDispatch()

  useEffect(() => {
    AuthService.service.validToken(dispatch)
  }, [dispatch]);

  return (
    <AppRouter />
  );
}

export default App;
