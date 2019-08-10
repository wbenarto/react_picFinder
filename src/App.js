import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


function App() {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
        <Search />
      </div>
    </MuiThemeProvider>

  )
}

export default App;
