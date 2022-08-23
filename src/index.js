import React from 'react';
import {createRoot} from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(  
  <React.StrictMode>
    <BrowserRouter>
    {/* // для роутинга внутри app  без него не фунгует роутинг!!! */}
      <App />
      </BrowserRouter>
  </React.StrictMode> 
);
