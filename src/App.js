import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import Booklist from "./crud/booklist";
import Crud2 from './crud2';
import Crud from './crud/booklist';

const App =()=> {
  return (
    <Router>
      <div>
        
        <NavbarComponent />
        <Routes>
          <Route path='/books' element={<Crud />} />
          <Route path='/peminjamans' element={<Crud2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
