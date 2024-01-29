import "./Select.css";

const Select = ({ fields }) => {
  return (
    <select className="select_name">
      {fields.map((field) => (
        <option value={field} key={field}>
          {field}
        </option>
      ))}
    </select>
  );
};
export default Select;
