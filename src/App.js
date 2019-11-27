import React from 'react';
import './styles/index.scss';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Routes from './routes';

const App = () => (
  <div className="container">
    <Navbar />
    <Routes />
    <Footer />
  </div>
);

export default App;
