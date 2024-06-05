import React, { useRef } from 'react'
import './NoBg.css'

export default function NoBg(props) {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.click();
  };
  return (
    <div className='no_bg_cont'>
      
      {props.comt_type === 'no_bg' ? <div>
        <div className='no_bg_cont_text'>אל תשכח להוריד את הקבצים, הם ימחקו אוטומטית כשתצא מהאתר</div>
        <div className='bg_color' onClick={focusInput}>צבע רקע</div>
        <input type='color' className='color_input' ref={inputElement} />
      </div> : <></>}

    </div>
  )
}
