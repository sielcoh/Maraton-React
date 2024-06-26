import React from 'react'
import './Download_file_popUp.css'
import cancel_img from './../assets/close1.png'
import download_img from './../assets/Downloads Folder.png'

export default function Download_file_popUp(props) {
    return (

        <div>
            <div className='overlay'> </div>
            <div className='Download_file_popUp_cont'>
                <img src={cancel_img} className='popUp_Cancel' onClick={() => props.setshowPopUp(false)} />
                <div className='top_img'></div>
                <div className='Download_file_popUp_text'>אישור להורדת תמונה</div>
            </div>
        </div>
    )
}
