import React from 'react'
import './Download_file.css'
import new_img from './../assets/new.png'


export default function Download_file(props) {
  return (
    <div className={'Download_file_cont ' + props.top}>
        {props.top == 'bottom' ? <img src={new_img} className='pro_img'/> : <></>}
        <div className={'file_title ' + props.top+"_title"}>{props.title}</div>
        <div className='file_subtitle'>{props.sub_title}</div>
        <button className='file_btn'>{props.btn}</button>
        <div className='small_text'>{props.small_text}</div>
    </div>
  )
}