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
      <div className='header'>
        <div className='header_title'>העלאת תמונה כדי להסיר את הרקע</div>
        <div className='geader_formats'>פורמנטים נתמכים: png,jpeg</div>
        <button className='upload_img_btn'>העלאת תמונה</button>
      </div>

      <div className='middle_cont'>
        <div className='left_div'>
        
        </div>
        <div className='right_div'>
          <Download_file title='תמונה חינם' top='top' sub_title='תצוגה מקדימה של תמונה' btn='הורד' small_text='איכות טובה עד 0.25 מגה פיקסל'/>
          <Download_file title='Pro' top='bottom' sub_title='תמונה מלאה' btn=' HD הורד' small_text='האיכות הטובה ביותר עד 125 מגה פיקסל'/>
        </div>
      </div>

      <div className='footer'>
        <img src={logo} className='img_1'/>
        <img src={banner} className='img_2'/>
      </div>
    </div>
  )
}
