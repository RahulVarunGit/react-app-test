import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
//import App from './App';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Comp1 from './pages/Comp';
import Comp2 from './pages/Comp2';
import reportWebVitals from './reportWebVitals';
import './styles/Layout.css';
import './styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="comp" element={<Comp1 color="red"/>} />
          <Route path="comp2" element={<Comp2 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
