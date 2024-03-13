
import React, { useState } from 'react';
import Login from './Components/Login';

function App() {
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Login setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default App;