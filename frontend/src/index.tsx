import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.scss';
import App from './Pages/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App name='Deque - TaskFlow' />
  </React.StrictMode>
);