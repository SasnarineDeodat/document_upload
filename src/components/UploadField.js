import document_icon from "../assets/document_icon.svg";
import "./UploadField.css";

const UploadField = () => {
  const handleImageUpload = () => {
    document.getElementById("fileUpload").click();
  };

  return (
    <div className="outer-div">
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
        <input type="file" id="fileUpload" hidden />
        <button className="upload_button" onClick={handleImageUpload}>
          Upload Manifest
        </button>
      </label>
      <hr className="underline" />
    </div>
  );
};

export default UploadField;
