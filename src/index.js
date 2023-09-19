import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PadgeProvider } from './context/Padgeprovider';
import { AddProductProvider } from './context/AddProductProvider';
import ProductProvider from './context/ProductProvider';
import  UsersProvider from './context/UsersProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <PadgeProvider>
      <AddProductProvider>
        <UsersProvider>
          <ProductProvider>
          <App />
          </ProductProvider>
        </UsersProvider>
      </AddProductProvider>
      </PadgeProvider>
  </BrowserRouter>
);

