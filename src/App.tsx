import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import AuthStore from './store/store';
//import { Provider } from "react-redux";
import { router } from './router/router.data'; 
//import store from "./store/store";

const App = observer(() => {
    useEffect(() => {
     AuthStore.checkAuth();
  }, []);

  return <RouterProvider router={router} />;
});

export default App;
