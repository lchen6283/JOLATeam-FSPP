import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//import "flowbite/dist/flowbite.css";
// const importFlowbiteFunc = function(flowbitePathStr)
// {
//     const flowbiteScriptEl = document.createElement('script')
//     flowbiteScriptEl.setAttribute(
//         'src', flowbitePathStr
//     )
//     document.body.appendChild(flowbiteScriptEl)
// }
// importFlowbiteFunc('https://unpkg.com/flowbite@1.5.4/dist/flowbite.js') // here goes your path to a local flowbite.js you want to import


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();