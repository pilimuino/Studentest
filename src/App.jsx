import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './layout/Layout';
import './index.css';
import Home from '@/pages/Home'
import Contact from '@/pages/Contact';
import Cookies from '@/pages/Cookies';
import Privacy from '@/pages/Privacy';
import Questiontest from '@/pages/Questiontest';
import Service from '@/pages/Service';
import TermsOfUse from '@/pages/TermsOfUse';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';



const App = () =>{
  return (
    <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/cookies' element={<Cookies/>} />
          <Route path='/privacy' element={<Privacy/>} />
          <Route path='/quetionstest' element={<Questiontest/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/termsofuse' element={<TermsOfUse/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
    </Layout>
  );
};

export default App;
