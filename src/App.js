import { useState } from "react";
import "./App.css";
import StepIndicator from "./components/StepIndicator";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import FormReview from "./components/FormReview";

const stepNames = ["Personal", "Address", "Account", "Review"];

// Shuru me sab fields khali
const initialData = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
  username: "",
  password: "",
  gender: "",
};

function App() {
  const [step, setStep] = useState(1); // abhi konsa step hai
  const [formData, setFormData] = useState(initialData); // saara form data
  const [errors, setErrors] = useState({}); // validation errors
  const [submitted, setSubmitted] = useState(false);

  // Jab bhi koi input change ho, formData update karo
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // type karte hi error hata do
  }

  // Har step ki validation
  function validate() {
    const newErrors = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      else if (formData.fullName.trim().length < 3) newErrors.fullName = "Name must be at least 3 characters";

      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Enter a valid email";

      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      else if (!/^[0-9]{11}$/.test(formData.phone)) newErrors.phone = "Phone must be 11 digits (numbers only)";
    }

    if (step === 2) {
      if (!formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.city.trim()) newErrors.city = "City is required";

      if (!formData.postalCode.trim()) newErrors.postalCode = "Postal code is required";
      else if (!/^[0-9]{5}$/.test(formData.postalCode)) newErrors.postalCode = "Postal code must be 5 digits";
    }

    if (step === 3) {
      if (!formData.username.trim()) newErrors.username = "Username is required";
      else if (formData.username.trim().length < 4) newErrors.username = "Username must be at least 4 characters";

      if (!formData.password) newErrors.password = "Password is required";
      else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

      if (!formData.gender) newErrors.gender = "Please select gender";
    }

    setErrors(newErrors);
    // agar koi error nahi to true
    return Object.keys(newErrors).length === 0;
  }

  function nextStep() {
    if (validate()) setStep(step + 1);
  }

  function prevStep() {
    setStep(step - 1);
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  function resetForm() {
    setFormData(initialData);
    setErrors({});
    setStep(1);
    setSubmitted(false);
  }

  // Submit hone ke baad success message
  if (submitted) {
    return (
      <div className="container">
        <div className="card success">
          <h2>🎉 Form Submitted Successfully!</h2>
          <p>Thank you, {formData.fullName}.</p>
          <button className="btn primary" onClick={resetForm}>
            Fill Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Multi-Step Form</h1>

        <StepIndicator currentStep={step} steps={stepNames} />

        {/* Step ke hisaab se component dikhana — props pass ho rahe hain */}
        {step === 1 && <StepOne formData={formData} handleChange={handleChange} errors={errors} />}
        {step === 2 && <StepTwo formData={formData} handleChange={handleChange} errors={errors} />}
        {step === 3 && <StepThree formData={formData} handleChange={handleChange} errors={errors} />}
        {step === 4 && <FormReview formData={formData} />}

        <div className="buttons">
          {step > 1 && (
            <button className="btn secondary" onClick={prevStep}>
              ← Back
            </button>
          )}

          {step < 4 ? (
            <button className="btn primary" onClick={nextStep}>
              Next →
            </button>
          ) : (
            <button className="btn primary" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
