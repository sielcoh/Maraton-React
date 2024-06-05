import React, { useState } from 'react'
import './Bg.css'
import NoBg from './NoBg'
import Download_file from './Download_file'
import close_red from './../assets/close.png'
import logo from './../assets/logo.png'
import banner from './../assets/banner.png'

export default function Bg() {
  const [selctedTabNoBg, setSelctedTabNoBg] = useState('selected_tab')
  const [selctedTabOriginal, setSelctedTabOriginal] = useState('')

  const updateTabNoBg = (e) =>{
    if(e.target.className === 'tab_no_bg ' || e.target.className === 'tab_no_bg selected_tab'){
      setSelctedTabNoBg('selected_tab')
      setSelctedTabOriginal('')
    }else{
      setSelctedTabNoBg('')
      setSelctedTabOriginal('selected_tab')
    }
  }

  return (
    <div className='bg_cont'>
        <img className='close_red' src={close_red} />
      <img className='close_red' src={close_red} />
      <div className='header'>
        <div className='header_title'>העלאת תמונה כדי להסיר את הרקע</div>
        <div className='geader_formats'>פורמנטים נתמכים: png,jpeg</div>
        <button className='upload_img_btn'>העלאת תמונה</button>
      </div>

      <div className='middle_cont'>
        <div className='left_div'>

          <div className='tabs_cont'>
            <div className={'tab_no_bg ' + selctedTabNoBg} onClick={updateTabNoBg}>הוסר רקע</div>
            <div className={'tab_original ' + selctedTabOriginal} onClick={updateTabNoBg}>מקורי</div>
          </div>

          {selctedTabNoBg === 'selected_tab' ? <NoBg comt_type='no_bg'/> : <NoBg comt_type='original'/>}
          
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