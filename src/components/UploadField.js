import document_icon from "../assets/document_icon.svg";
import ProgressBar from "./ProgressBar";
import "./UploadField.css";
import { useState } from "react";

const UploadField = () => {
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState(0);

  const handleImageUpload = () => {
    document.getElementById("fileUpload").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);
    let fileSizeInMB = (file.size / (1024 * 1024)).toFixed(2);
    if (fileSizeInMB == 0.0) {
      fileSizeInMB = 0.01;
    }
    setFileSize(fileSizeInMB);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFileName(file.name);
    let fileSizeInMB = (file.size / (1024 * 1024)).toFixed(2);
    if (fileSizeInMB == 0.0) {
      fileSizeInMB = 0.01;
    }
    setFileSize(fileSizeInMB);
  };

  return (
    <div className="outer-div" onDragOver={handleDragOver} onDrop={handleDrop}>
      <label htmlFor="images" className="drop-container">
        <div className="inner-border">
          <img
            src={document_icon}
            alt="document_icon"
            className="document_icon"
          />
          <span className="drop-title">
            Drag & Drop Here or <strong>Browse</strong>
          </span>
        </div>
        <input type="file" id="fileUpload" hidden onChange={handleFileChange} />
        <button className="upload_button" onClick={handleImageUpload}>
          Upload Manifest
        </button>
      </label>
      <hr className="underline" />
      <ProgressBar completed={10} text={fileName} numbers={`${fileSize} MB`} />
    </div>
  );
};

export default UploadField;
