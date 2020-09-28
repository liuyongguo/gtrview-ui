import React, { useState } from 'react';
import './App.css'
import './style/index.scss'
import Button from './components/Button/Button'
// // import Alert from './components/Alert/Alert'
// import Menu from './components/Menu/Menu'
// import MenuItem from './components/Menu/MenuItem'
function App() {
  const [flag,setflag] = useState(false)
  return (
    <div className="App">
      <h2>正常状态</h2> 
     <Button>默认按钮</Button>&nbsp;&nbsp;&nbsp;
     <Button btnType="primary">主要按钮</Button>&nbsp;&nbsp;&nbsp;
     <Button btnType="success">成功按钮</Button>&nbsp;&nbsp;&nbsp;
     <Button btnType="info">信息按钮</Button>&nbsp;&nbsp;&nbsp;
     <Button btnType="warning">警告按钮</Button>&nbsp;&nbsp;&nbsp;
     <Button btnType="danger">危险按钮</Button>&nbsp;&nbsp;&nbsp;<br/><br/>
     <h2>图标按钮</h2>
     <Button cicle btnType="default"><span className="iconfont icon-search" ></span></Button>&nbsp;&nbsp;&nbsp;
     <Button cicle btnType="primary"><span className="iconfont icon-bianji" ></span></Button>&nbsp;&nbsp;&nbsp;
     <Button cicle btnType="success"><span className="iconfont icon-chenggong1" ></span></Button>&nbsp;&nbsp;&nbsp;
     <Button cicle btnType="warning"><span className="iconfont icon-shoucang" ></span></Button>&nbsp;&nbsp;&nbsp;
     <Button cicle btnType="danger"><span className="iconfont icon-shanchu" ></span></Button>&nbsp;&nbsp;&nbsp;<br/><br/>
     <h2>禁用状态</h2>
     <Button disabled>默认按钮</Button>&nbsp;&nbsp;&nbsp;
     <Button btnType="primary" disabled>主要按钮</Button>&nbsp;&nbsp;&nbsp;
     <Button btnType="success" disabled>成功按钮</Button>&nbsp;&nbsp;&nbsp;
     <Button btnType="info" disabled>信息按钮</Button>&nbsp;&nbsp;&nbsp;
     <Button btnType="warning" disabled>警告按钮</Button>&nbsp;&nbsp;&nbsp;
     <Button btnType="danger" disabled>危险按钮</Button>&nbsp;&nbsp;&nbsp;<br/><br/>
     <h2>链接按钮</h2>
     <Button href="http://www.baidu.com" btnType="link">文字按钮</Button>
     <Button href="http://www.baidu.com" btnType="link" disabled>禁用状态</Button><br/><br/>
     <h2>不同尺寸</h2>
     <Button size="large">large Button</Button>&nbsp;&nbsp;&nbsp;
     <Button size="default">default Button</Button>&nbsp;&nbsp;&nbsp;
     <Button size="mini">mini Button</Button><br/><br/>
     <h2>loading状态</h2>
     
     <Button loading={flag} btnType="primary" onClick={
       ()=>{
         setflag(true)
         setTimeout(() => {
          setflag(false)
         }, 3000);
       }
     }>loading</Button>
    </div>
  );
}

export default App;
