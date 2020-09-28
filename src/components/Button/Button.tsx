import React from 'react';
import classnames from 'classnames' // 用于拼接类名，文档链接:https://www.npmjs.com/package/classnames
import { spawn } from 'child_process';
// 定义button按钮可传入参数，属性
interface BtnProps {
    className?:string, // 用户自定义类名
    disabled?:boolean, //是否禁用
    size?:string,      // 按钮大小
    btnType?:string,   // 按钮类型
    href?:string,      // 如果为link类型，添加href属性
    children:React.ReactNode, // children节点
    cicle:boolean,        //是否为圆类型按钮
    loading:boolean     // 是否显示加载
}
type nativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> & BtnProps; // 联合原生button属性，这样就可以在封装好的组件中使用原生属性
type anchorBuyyonProps = React.AnchorHTMLAttributes<HTMLElement> & BtnProps;
export type ButtonProps = Partial<nativeButtonProps> & Partial<anchorBuyyonProps>; // Partial作用是将原生属性作为可选参数
// 定义Button组件
const Button:React.FC<ButtonProps> = (props)=>{
  const {
    className,
    disabled,
    size,
    btnType,
    href,
    children,
    cicle,
    loading,
    ...restProps
  } = props;
  // 根据传入的不同属性拼接不同的类名
  const classess = classnames('btn',className,{
    [`btn-${btnType}`]:btnType,
    [`btn-${size}`]:size,
    'cicle-btn':cicle,
    'isloading':loading,
    disabled:(btnType==="link" && disabled)
  })
  if(btnType == 'link' && href){
      return (
      <a href={href} className={classess} {...restProps}>{children}</a>
      )
  }else{
      return(
      <button disabled={disabled || loading} className={classess} {...restProps}>{loading?<span className="iconfont icon-jiazaizhong"></span>:''}{children}</button>
      )
  }
}
// 按钮默认样式
Button.defaultProps = {
    btnType:"default",
    disabled:false
}
export default Button;
