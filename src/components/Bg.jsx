import React from 'react'
import './Bg.css'
import close_red from './../assets/close.png'

export default function Bg() {
  return (
    <div className='bg_cont'>
        <img className='close_red' src={close_red} />
    </div>
  )
}
