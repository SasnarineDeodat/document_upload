import "./Select.css";

const Select = ({ fields, placeholder }) => {
  return (
    <div className="custom-select-wrapper">
      <select
        name="import_type"
        className="select_name"
        placeholder={placeholder}
      >
        {fields.map((field) => (
          <option value={field} key={field}>
            {field}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
