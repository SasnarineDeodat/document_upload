import document_icon from "../assets/document_icon.svg";
import "./UploadField.css";
const UploadField = () => {
  const handleImageUpload = () => {
    document.getElementById("fileUpload").click();
  };
  return (
    <div>
      <label for="images" class="drop-container" id="dropcontainer">
        <img
          src={document_icon}
          alt="document_icon"
          className="document_icon"
        />
        <span className="drop-title">
          Drop & Drop Here or <strong>Browse</strong>
        </span>
        <input type="file" id="fileUpload" hidden />
        <button className="upload_button" onClick={handleImageUpload}>
          Upload Manifest
        </button>
      </label>
    </div>
  );
};
export default UploadField;
