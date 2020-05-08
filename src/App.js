import React from 'react';
import './App.css';
import AddUrl from './components/AddUrl'
import Header from './components/Header'
import Footer from './components/Footer'
// import SubHeader from './components/SubHeader'


function App() {

  return (
    <div className="App">
      <Header />
      {/* <SubHeader /> */}
      <AddUrl />
      <Footer />
    </div>
  );
}

export default App;
