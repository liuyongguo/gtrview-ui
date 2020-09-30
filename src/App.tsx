import React from 'react';
import './App.css'
import './style/index.scss'
import Icon from './components/Icon/Icon'
import Form from './components/Form/Form'
// import Input from './components/Form/Input'
import Select from './components/Select/Select'
import Option from './components/Select/Option'
function App() {
  return (
    
    <div className="App">
     <Form action="https:www.naidu.com" method="get">
     <Select
      name="viking-select"
      onChange={function noRefCheck(){}}
      onVisibleChange={function noRefCheck(){}}
      placeholder="请选择"
     >
    <Option value="nihao" />
    <Option value="nihao2" />
    <Option value="nihao3" />
    <Option
      disabled
      value="disabled"
    />
    <Option value="nihao5" />
  </Select>
     </Form>
    </div>
    
  );
}

export default App;
