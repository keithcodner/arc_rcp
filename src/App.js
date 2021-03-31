import React from 'react';

import {CockPit, Register, Settings} from './pages';

function App() {
  return (
    <div>
      <h1>ARC Control Panel</h1>
      <CockPit />
      <Register />
      <Settings />
    </div>
  );
}

export default App;
