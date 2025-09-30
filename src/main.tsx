
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App';
import { Provider } from "react-redux";
import { store}  from "./app/store";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer position='bottom-left' autoClose={2000}/>
    </Provider>
  </BrowserRouter>
);
