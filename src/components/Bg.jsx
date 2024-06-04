import React from 'react'
import './Bg.css'
import close_red from './../assets/close.png'
import Download_file from './Download_file'
import logo from './../assets/logo.png'
import banner from './../assets/banner.png'

export default function Bg() {
  return (
    <div className='bg_cont'>
        <img className='close_red' src={close_red} />
    </div>
  )
}
