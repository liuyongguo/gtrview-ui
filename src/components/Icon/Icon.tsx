import React from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
// // fontawersome图标图
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// 添加所有图标
library.add(fas)
interface IconProps extends FontAwesomeIconProps {
    theme?:string,
    className?:string
}
export const Icon:React.FC<IconProps> = (props) =>{
    const {
        theme,
        className,
        ...restProps
    } = props;
    const classess = classnames('gv-icon',className,{
        [`icon-${theme}`]:theme
    })
    return  (
        <FontAwesomeIcon  className ={classess} { ...restProps} />
    )
}
export default Icon;