
import React, { useState } from 'react';
import Login from './Components/Login';
import JokesPage from './Components/JokesPage';
import NotFound from './Components/NotFound';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';

function App() {
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path='/jokes' element={<JokesPage/>}/>
      <Route exact path='/not-found' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter> 
  );
}

export default App;