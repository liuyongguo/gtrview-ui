import React, { useState } from 'react';
import classnames from 'classnames'
interface AlertProps{
    type:string, // 警告框类型
    message:string, // 警告框内容
    closable?:boolean, // 是否开启关闭按钮
    onClose?:()=>void,  // 关闭回调函数
    icon?:boolean,   // 是否显示icon
}
type AlertDivProps = React.HTMLAttributes<HTMLElement> & AlertProps;
const Alert:React.FC<AlertDivProps> = (props)=>{ 
const {
    type,
    message,
    closable,
    className,
    onClose,
    children,
    icon,
} = props;
const handleClose = ()=>{
    setAlertIsShow(false)
    onClose && onClose()
}
const [alertIsShow,setAlertIsShow] = useState(true)
const classes = classnames('alert',className,{
    [`alert-${type}`]:type,
    'alert-close':closable,
})
const icons = classnames({
    [`icon-${type} iconfont`]:icon
})
return (
   <React.Fragment>
     {alertIsShow?(
     <div className={classes}>
     <span className={icons}></span>
     <span className="title">{message}</span>
     {closable?<span className="iconfont icon-guanbi icon" onClick={handleClose}></span>:''}
     <div>
         {children}
     </div>
     </div>
     ):''}
   </React.Fragment>
)
}
export default Alert;
