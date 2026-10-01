// Upar wali progress bar: Step 1, Step 2, Step 3, Review
// Props: currentStep (number), steps (array of names)
function StepIndicator({ currentStep, steps }) {
  return (
    <div className="steps">
      {steps.map((stepName, index) => {
        const stepNumber = index + 1;
        let status = "";
        if (stepNumber === currentStep) status = "active";
        else if (stepNumber < currentStep) status = "done";

        return (
          <div key={stepName} className={`step ${status}`}>
            <span className="circle">{stepNumber < currentStep ? "✓" : stepNumber}</span>
            <span className="step-name">{stepName}</span>
          </div>
        );
      })}
    </div>
  );
}

export default StepIndicator;
