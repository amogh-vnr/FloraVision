import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './globals.css'

// This is the starting point of the whole app
// It finds the <div id="root"> in index.html and renders our App inside it
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
