import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import {ContextProvider} from './Context/Context'
import './index.css'
import Router from './Router/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>

    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
)
