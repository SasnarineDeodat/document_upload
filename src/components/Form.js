import "./Form.css";
import Select from "./Select";
import UploadField from "./UploadField";

const Form = () => {
  return (
    <div className="main_form_div">
      <Select fields={["React", "Node"]} />
      <hr style={{ width: "300px" }} />
      <p className="upload_heading">
        Select a manifest that you'd like to import
      </p>
      <UploadField />
    </div>
  );
};
export default Form;
