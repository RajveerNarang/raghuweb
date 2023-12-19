import React from 'react'
import style from './button.module.scss'

export default function Button({name, shape}) {
  return (
	<button 
    className={`${shape === 'circle'} ? ${style.btn} ${style.btn_default} : `}
    >{name}</button>
  )
}
