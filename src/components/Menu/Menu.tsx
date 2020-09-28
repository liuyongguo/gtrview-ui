import React, {createContext, useState}from 'react';
import classnnames from 'classnames';
import  {MenuItemProps}  from './MenuItem'
type menuMode = 'horizontal' | 'vertical'
type onSelect = (selectIndex:number)=>void
interface MenuProps{
    defaultIndex?:number;
    classNames?:string;
    mode?:menuMode;
    onSelect?:onSelect;
    style?:React.CSSProperties;
}
interface iMenuConText {
  index?:number;
  onSelect?:onSelect;
}
export const MenuContext = createContext<iMenuConText>({index:0})
const Menu:React.FC<MenuProps> = (props)=>{
  const {
    defaultIndex,
    classNames,
    mode,
    onSelect,
    style,
    children
  } = props
  const classess = classnnames('gv-menu',classNames,{
      'menu-vertical':mode === 'vertical'
  })
  const [current, setcurrent] = useState(defaultIndex);
  const handleClick = (index:number) =>{
    setcurrent(index);
    if(onSelect){
        onSelect(index)
    }
  }
  const passedContext :iMenuConText = {
    index:current? current : 0,
    onSelect:handleClick
  }
  const renderChild = ()=> {
    return React.Children.map(children,(child,index)=>{
        const childElement =  child as React.FunctionComponentElement<MenuItemProps>;
        const { name } = childElement.type;
        if(name === 'MenuItem'){
            console.log(index);
            
            return React.cloneElement(childElement,{
                index
            });
        }else{
            console.error('Menu has a child which is not a MenuItem')
        }
        
    })
  }
  return(
      <ul className={classess}>
      <MenuContext.Provider value={passedContext}>
      {renderChild()}
      </MenuContext.Provider>
      </ul>
  )
}
Menu.defaultProps = {
  defaultIndex:0,
  mode:'horizontal' 
}
export default Menu;