import React from 'react';
import './Download_file_popUp.css';
import cancel_img from './../assets/close1.png';
import notRobot from './../assets/not_robot.png';

export default function DownloadFilePopUp(props) {
    return (

        <div>
            <div className='overlay'> </div>
            <div className='Download_file_popUp_cont'>
                <img src={cancel_img} className='popUp_Cancel' onClick={() => props.setshowPopUp(false)} />
                <div className='top_img'></div>
                <div className='Download_file_popUp_text'>אישור להורדת תמונה</div>
                <div className='Download_file_popUp_subtext'>האם להוריד את התמונה?</div>

                <div className='div_cont'>
                    <input type="checkbox" />
                    <div>אני לא רובוט</div>
                    <img src={notRobot} alt="notRobot" className='img_not_robot'/>
                </div>
                <div className="btn_cont">
                    <button className='cancel_bnt' onClick={() => props.setshowPopUp(false)}>ביטול</button>
                    <button className='btn_approve'>אישור</button>
                </div>
            </div>
        </div>
    )
}
