import React from 'react'
import './styles.css'

export const ResumeItem = ({title, value, Icon}) => {
  return (
    <div className='containerItem'>
     <p className='title'>{title} <span><Icon /></span></p>  
     <p className='value'>R$ {value}</p>      
    </div>
  )
}
