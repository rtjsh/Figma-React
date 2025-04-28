import React from 'react'
import styles from './Button.module.css'


// function Button(props) {
    
//   return (
    
//     <button className={props.isOutline ? styles.outline_btn : styles.primary_btn}>
//       {props.icon} 
//       {props.text}
//     </button>

    
//   )
// }
function Button({isOutline, icon, text}) {
    
  return (
    
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon} 
      {text}
    </button>

    
  )
}

export default Button
