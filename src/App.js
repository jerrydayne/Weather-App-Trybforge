import React from 'react';

import Wrapper from './components/layout/Wrapper';
import Main from './components/Main';
import Menu from './components/Menu';


function App() {
  return (
    <Wrapper>
      <Menu />
      <Main />
    </Wrapper>
  );
}

export default App;
