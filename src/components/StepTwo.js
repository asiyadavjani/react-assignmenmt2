import InputField from "./InputField";

// Step 2: Address Details
// Props: formData, handleChange, errors
function StepTwo({ formData, handleChange, errors }) {
  return (
    <div>
      <h2>Step 2: Address Details</h2>

      <InputField
        label="Address *"
        name="address"
        value={formData.address}
        onChange={handleChange}
        error={errors.address}
        placeholder="House # / Street"
      />

      <InputField
        label="City *"
        name="city"
        value={formData.city}
        onChange={handleChange}
        error={errors.city}
        placeholder="e.g. Karachi"
      />

      <InputField
        label="Postal Code *"
        name="postalCode"
        value={formData.postalCode}
        onChange={handleChange}
        error={errors.postalCode}
        placeholder="e.g. 75500"
      />
    </div>
  );
}

export default StepTwo;
