
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { Provider } from "react-redux";
import { store}  from "./store";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { router } from './router/router'

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer position="bottom-left" autoClose={2000} />
  </Provider>
);
