import InputField from "./InputField";

// Step 3: Account / Other Details
// Props: formData, handleChange, errors
function StepThree({ formData, handleChange, errors }) {
  return (
    <div>
      <h2>Step 3: Account Details</h2>

      <InputField
        label="Username *"
        name="username"
        value={formData.username}
        onChange={handleChange}
        error={errors.username}
        placeholder="At least 4 characters"
      />

      <InputField
        label="Password *"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        placeholder="At least 6 characters"
      />

      {/* Select dropdown */}
      <div className="field">
        <label htmlFor="gender">Gender *</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className={errors.gender ? "input-error" : ""}
        >
          <option value="">-- Select --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender && <p className="error">{errors.gender}</p>}
      </div>
    </div>
  );
}

export default StepThree;
