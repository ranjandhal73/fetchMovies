import React from 'react';
import ReactDOM from 'react-dom/client';
import FilmsProvider from './store/FilmsProvider';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FilmsProvider>
        <App />
    </FilmsProvider>
);
