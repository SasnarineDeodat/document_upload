import "./Form.css";
import Select from "./Select";
import UploadField from "./UploadField";
import RightPart from "./RightPart";

const Form = () => {
  return (
    <div className="container">
      <div className="main_form_div">
        <div className="select_container">
          <Select fields={["React", "Node"]} placeholder="Select Import Type" />
        </div>
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
      <div className="right_part_main_div">
        <RightPart />
      </div>
    </div>
  );
};
export default Form;
