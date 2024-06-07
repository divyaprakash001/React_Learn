import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Random from './Random.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Random/>
    {/* <DpButton /> */}
    {/* <Demo /> */}
  </React.StrictMode>,
)

// ReactDOM.createRoot(document.querySelector(".para")).render(
//   <React.StrictMode>
//   </React.StrictMode>,
// )
