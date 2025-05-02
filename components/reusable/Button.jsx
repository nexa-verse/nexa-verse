import React from 'react'
import {} from 'react-icons'

const Button = ({icon, children, modifier = ''}) => {
  return (
    <button  className={`button button--${modifier}`} >
        {icon && <span className="button__icon">{icon}</span>}
        <span className="button__text">{children}</span>        
    </button>
  )
}

export default Button