import React,{FC, FormHTMLAttributes} from 'react';
type FormProps = FormHTMLAttributes<HTMLElement>;
const Form:FC<FormProps> = (props) =>{
    const {children,...restprops} = props
    return (
        <div>
          <form {...restprops} className="gtr-form">
              {children}
          </form>  
        </div>
    )
}
export default Form;