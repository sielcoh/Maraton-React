import React, { useState, useRef } from "react";
import "./Bg.css";
import NoBg from "./NoBg";
import DownloadFile from "./DownloadFile";
import Eula from "./Eula";
import close_red from "./../assets/close.png";
import logo from "./../assets/logo.png";
import banner from "./../assets/banner.png";
import DownloadFilePopUp from "./DownloadFilePopUp";
import axios from 'axios';

export default function Bg() {
  const [selctedTabNoBg, setSelctedTabNoBg] = useState("selected_tab");
  const [selctedTabOriginal, setSelctedTabOriginal] = useState("");
  const [showEula, setShowEula] = useState(false);
  const [showPopUp, setshowPopUp] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [fileError, setFileError] = useState('')
  const [fileNameWithBg, setFileNameWithBg] = useState('')
  const [fileNameNoBg, setFileNameNoBg] = useState('')
  const [fileNameNoBgNameOnly, setfileNameNoBgNameOnly] = useState('')
  const [getColor, setGetColor] = useState('')
  const inputElement = useRef();


  const fileInput = () => {
    inputElement.current.click();
  };

  const updateTabNoBg = (e) => {
    if (
      e.target.className === "tab_no_bg " ||
      e.target.className === "tab_no_bg selected_tab"
    ) {
      setSelctedTabNoBg("selected_tab");
      setSelctedTabOriginal("");
    } else {
      setSelctedTabNoBg("");
      setSelctedTabOriginal("selected_tab");
    }
  }

  function uploadFile(e) {
    let file = e.target.files[0]
    let serverUrl = 'https://maraton-react.onrender.com/'
    if (file.size <= 1000000 && (file.type === 'image/png' || file.type === 'image/jepg' || file.type === 'image/jpg')) {
      setShowLoader(true)
      setFileError('');
      let formData = new FormData();
      formData.append('file', file);
      formData.append('color', getColor);
      axios({
        method: 'post',
        url: serverUrl + 'upload_img',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      }).then((res) => {
        setFileNameWithBg(serverUrl + res.data);
        setFileNameNoBg(serverUrl + 'no_bg_' + res.data);
        setfileNameNoBgNameOnly('no_bg_' + res.data);
        setShowLoader(false)
      })
        .catch((error) => {
          console.log(error);
        })
    } else {
      setFileError('קובץ לא נתמך');
    }
  }


  return (
    <>
      <div className="bg_cont">
        <img className="close_red" src={close_red} alt="close_red" />
        <img className="close_red" src={close_red} alt="close_red" />
        <div className="header">
          <div className="header_title">העלאת תמונה כדי להסיר את הרקע</div>
          <div className="geader_formats">פורמנטים נתמכים: png,jpeg</div>
          <button className="upload_img_btn" onClick={fileInput}>העלאת תמונה</button>
          <input
            type="file"
            className="input_upload_file"
            ref={inputElement}
            onChange={uploadFile}
          />
          <div className="file_error">{fileError}</div>
        </div>

        <div className="middle_cont">
          <div className="left_div">
            <div className="tabs_cont">
              <div
                className={"tab_no_bg " + selctedTabNoBg}
                onClick={updateTabNoBg}
              >
                הוסר רקע
              </div>
              <div
                className={"tab_original " + selctedTabOriginal}
                onClick={updateTabNoBg}
              >
                מקורי
              </div>
            </div>

            {selctedTabNoBg === "selected_tab" ? (
              <NoBg comt_type="no_bg" fileName={fileNameNoBg} setGetColor={setGetColor} getColor={getColor}/>) : (
              <NoBg comt_type="original" fileName={fileNameWithBg} />
            )}

            <div className="footer_left_div">
              <div className="footer_left_div_text">
                על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות שלנו. אתר זה מוגן
                על ידי מדיניות הפרטיות ותנאי השירות שלו
              </div>
            </div>
            <button
              className="eula"
              onClick={() => {
                setShowEula(true);
              }}
            >
              תקנון החברה
            </button>
          </div>

          <div className="right_div">
            <DownloadFile
              title="תמונה חינם"
              top="top"
              sub_title="תצוגה מקדימה של תמונה"
              btn="הורד"
              small_text="איכות טובה עד 0.25 מגה פיקסל"
              setshowPopUp={setshowPopUp}
            />
            <DownloadFile
              title="Pro"
              top="bottom"
              sub_title="תמונה מלאה"
              btn=" HD הורד"
              small_text="האיכות הטובה ביותר עד 125 מגה פיקסל"
              setshowPopUp={setshowPopUp}
            />
          </div>
        </div>

        <div className="footer">
          <img src={logo} className="img_1" alt="img_1"/>
          <img src={banner} className="img_2" alt="img_2"/>
        </div>
      </div>

      {showLoader ?
        <div className="loader">
          <div className="loader_in">
            39%
          </div>
        </div> : <></>}

      {showEula ? <Eula setShowEula={setShowEula} /> : <></>}
      {showPopUp ? <DownloadFilePopUp setshowPopUp={setshowPopUp} fileNameNoBgNameOnly={fileNameNoBgNameOnly} /> : <></>}
    </>
  );
}

