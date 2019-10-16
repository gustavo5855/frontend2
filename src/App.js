import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header.jsx';
import Content from './components/Content';
import Topnav from './components/Topnav';
// import Login from './components/Login';
function App() {
  return (
    <React.Fragment>
      <Sidebar/>
      <Content>
        <Topnav/>
        <Header/>
      </Content>
    </React.Fragment>
    // <Login/>
  );
}

export default App;
