import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import "@ckeditor/ckeditor5-build-classic/build/ckeditor.css";
import App from './App';
import reportWebVitals from './reportWebVitals';

import  ThemeContext  from "./context/ThemeContext"; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <ThemeContext>
        <App />
      </ThemeContext>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
