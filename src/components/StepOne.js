import InputField from "./InputField";

// Step 1: Personal Information
// Props: formData, handleChange, errors
function StepOne({ formData, handleChange, errors }) {
  return (
    <div>
      <h2>Step 1: Personal Information</h2>

      <InputField
        label="Full Name *"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        error={errors.fullName}
        placeholder="e.g. Ali Khan"
      />

      <InputField
        label="Email *"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="e.g. ali@gmail.com"
      />

      <InputField
        label="Phone Number *"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        placeholder="e.g. 03001234567"
      />
    </div>
  );
}

export default StepOne;
