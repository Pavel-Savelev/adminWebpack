import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import './styles/modal.css'
import './styles/statistica.css'
import './styles/slider.css'
import './styles/stationList.css'
import './styles/logs.css'
import './styles/light.css'
import './styles/dark.css'
import './styles/variables.css'
import './styles/specialSettings.css'
import App from './App';

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

