import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let a;
a = 1;
a = 2;
console.log(a);
