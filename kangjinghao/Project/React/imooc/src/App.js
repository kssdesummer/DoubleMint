import React from 'react';
import {Header} from './Components/Header/Header';
import {Main} from './Components/Main/Main';
import {Footer} from './Components/Footer/Footer';
import {Sidebar} from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Sidebar />
    </div>
  );
}

export default App;
