import { Switch, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import SideBar from './components/SideBar';

import './App.css';
import './components/Layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

function App() {

  const [kullanicilar, setKullanicilar] = useState([]);

  const addUser = (kullanici) => {
    setKullanicilar([...kullanicilar, kullanici]);
  };

  return (
    <>
      <Header />
      <div className="content-section">
        <SideBar kullanicilar={kullanicilar} />
        <Main addUser={addUser} />
      </div>
      <Footer />
    </>
  );
}


export default App;
