import React from 'react'
import classNames from "classnames";

export const Input= (props) => {
    const  {
        className,
        label,
        id,
        placeholder,
        middle,
        disabled,
        input,
        lastLabel,
        meta,
        maxLength
    } = props;

    
    return (
        <div className='container-input'>
            <label htmlFor={id} className={
                classNames(middle ?"label-Admin-Pickers-middle":"label-Admin-Pickers",{
                        "labelError": meta.error && meta.touched,
                        "readonly":disabled,
                        "last-label":lastLabel,
                         
                    }
                )}>
                {label}
            </label>
            <input
                
                className={ classNames( className, {
                    "readonly":disabled,
                    "inputError": meta.error && meta.touched,
                })}
                type={input.type}
                name={input.name}
                disabled={disabled}
                id={id}
                value={input.value}
                placeholder={placeholder}
                onChange={input.onChange}
                onFocus={input.onFocus }
                onBlur={input.onBlur} 
                maxLength={maxLength}
            />
               {
                meta.error && meta.touched &&
                <div className="input-errors-container">
                    <p className="errors"> {meta.error}  </p>
                </div>
                }
        </div>
    )
}
