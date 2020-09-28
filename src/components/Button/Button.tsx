import React from 'react';
import classnames from 'classnames'
interface BtnProps {
    className?:string,
    disabled?:boolean,
    size?:string,
    btnType?:string,
    href?:string,
    children:React.ReactNode
}
type nativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> & BtnProps;
type anchorBuyyonProps = React.AnchorHTMLAttributes<HTMLElement> & BtnProps;
export type ButtonProps = Partial<nativeButtonProps> & Partial<anchorBuyyonProps>;
const Button:React.FC<ButtonProps> = (props)=>{
  const {
    className,
    disabled,
    size,
    btnType,
    href,
    children,
    ...restProps
  } = props;
  const classess = classnames('btn',className,{
    [`btn-${btnType}`]:btnType,
    [`btn-${size}`]:size,
    disabled:(btnType==="link" && disabled)
  })
  if(btnType == 'link' && href){
      return (
      <a href={href} className={classess} {...restProps}>{children}</a>
      )
  }else{
      return(
      <button disabled={disabled} className={classess} {...restProps}>{children}</button>
      )
  }
}
Button.defaultProps = {
    btnType:"default",
    disabled:false
}
export default Button;
