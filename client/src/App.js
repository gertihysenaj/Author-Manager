import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from './components/Nav';
import Main from './views/Main';
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <BrowserRouter>
            <Nav />
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/create" element={<CreateAuthor/>} />
        <Route exact path="/edit/:id" element={<EditAuthor/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;


