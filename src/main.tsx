import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';

const G_CLIENT_ID = "332875654000-jt0jsl48feicssrue2qn8dlgn5tavv0j.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 
  
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={G_CLIENT_ID}>
      <App/>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
