import "./Form.css";
import Select from "./Select";

const Form = () => {
  return (
    <div className="main_form_div">
      <Select fields={["React", "Node"]} />
      <hr style={{ width: "300px" }} />
    </div>
  );
};
export default Form;
