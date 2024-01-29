import "./Form.css";
import Select from "./Select";
import UploadField from "./UploadField";
import RightPart from "./RightPart";

const Form = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="main_form_div">
        <Select fields={["React", "Node"]} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 20,
          }}
        >
          <p className="upload_heading">
            Select a manifest that you'd like to import
          </p>
          <UploadField />
        </div>
      </div>
      <div style={{ marginLeft: "25px" }}>
        <RightPart />
      </div>
    </div>
  );
};
export default Form;
