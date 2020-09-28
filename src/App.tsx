import React from 'react';
import './App.css'
import './style/index.scss'
// import Alert from './components/Alert/Alert'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'
function App() {
  return (
    <div className="App"> 
     <Menu onSelect={(index)=>alert(index)}>
       <MenuItem index={0}>
        我是第一好
       </MenuItem>
       <MenuItem index={1}>
        我是第2好
       </MenuItem>
       <MenuItem index={2}>
        我是第3好
       </MenuItem>
     </Menu>
    </div>
  );
}

export default App;
