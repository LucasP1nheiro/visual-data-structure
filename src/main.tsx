import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import DataStructureContextProvider from './context/DataStructureContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DataStructureContextProvider>
      <App />
    </DataStructureContextProvider>
  </React.StrictMode>,
)
