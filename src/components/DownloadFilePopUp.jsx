import React, { useState } from 'react';
import './Download_file_popUp.css';
import cancel_img from './../assets/close1.png';
import notRobot from './../assets/not_robot.png';

export default function DownloadFilePopUp(props) {

    const [checkBoxSet, setCheckBoxSet] = useState(false);
    const [showErr, setshowErr] = useState(false);

    const notRobotFunc = (e) => {
        setCheckBoxSet(e.target.checked);
    }

    const downloadFile = async () => {
        if (checkBoxSet && props.fileNameNoBgNameOnly) {
            await fetch('https://maraton-react.onrender.com' + props.fileNameNoBgNameOnly)
                .then(response => {
                    response.blob().then(blob => {
                        debugger;
                        let url = window.URL.createObjectURL(blob);
                        let a = document.createElement('a');
                        a.href = url;
                        a.download = props.fileNameNoBgNameOnly;
                        a.click();
                    });
                });
        } else {
            setshowErr(true);
        }

    }



    return (

        <div>
            <div className='overlay'> </div>
            <div className='Download_file_popUp_cont'>
                <img src={cancel_img} className='popUp_Cancel' onClick={() => props.setshowPopUp(false)} />
                <div className='top_img'></div>
                <div className='Download_file_popUp_text'>אישור להורדת תמונה</div>
                <div className='Download_file_popUp_subtext'>האם להוריד את התמונה?</div>

                <div className='div_cont'>
                    <input type="checkbox" onChange={notRobotFunc} />
                    <div>אני לא רובוט</div>
                    <img src={notRobot} alt="notRobot" className='img_not_robot' />
                </div>
                <div className="btn_cont">
                    <button className='cancel_bnt' onClick={() => props.setshowPopUp(false)}>ביטול</button>
                    <button className='btn_approve' onClick={downloadFile}>אישור</button>
                </div>
                {showErr ? <div className='err_not_robot'> לטעון תמונה/נא לסמן אני לא רובוט</div> : <></>}
            </div>
        </div>
    )
}
