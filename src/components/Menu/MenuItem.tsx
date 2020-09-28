import React,{useContext} from 'react';
import classnnames from 'classnames';
import {MenuContext} from './Menu'
export interface MenuItemProps {
  index?:number,
  className?:string,
  style?:React.CSSProperties,
  disabled?:boolean
}
const MenuItem:React.FC<MenuItemProps> = (props) =>{
    const {index,className,style,disabled,children}  = props;
    const context = useContext(MenuContext);
    const classes = classnnames('gv-menuitem',className,{
        'is-disabled':disabled,
        'is-active':context.index === index
    })
    const handleClick = () =>{   
      if (context.onSelect && !disabled && typeof index === "number") {
        context.onSelect(index)
      }
    }
    return(
        <li className={classes} onClick={handleClick}>
           {children}
        </li>
    )
}
export default MenuItem;