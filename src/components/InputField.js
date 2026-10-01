// Reusable input component — har field isi se banegi.
// Props: label, name, type, value, onChange, error, placeholder
function InputField({ label, name, type = "text", value, onChange, error, placeholder }) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? "input-error" : ""}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default InputField;
