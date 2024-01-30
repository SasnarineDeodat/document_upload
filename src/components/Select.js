import "./Select.css";

const Select = ({ fields, placeholder }) => {
  return (
    <div className="custom-select-wrapper">
      <select
        name="import_type"
        className="select_name"
        defaultValue=""
        placeholder={placeholder}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
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
