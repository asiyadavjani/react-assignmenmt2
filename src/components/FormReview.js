// Final Step: Form Review — sab entered data yahan show hota hai
// Props: formData
function FormReview({ formData }) {
  // Label aur value ki list
  const rows = [
    { label: "Full Name", value: formData.fullName },
    { label: "Email", value: formData.email },
    { label: "Phone", value: formData.phone },
    { label: "Address", value: formData.address },
    { label: "City", value: formData.city },
    { label: "Postal Code", value: formData.postalCode },
    { label: "Username", value: formData.username },
    { label: "Password", value: "*".repeat(formData.password.length) }, // password hide
    { label: "Gender", value: formData.gender },
  ];

  return (
    <div>
      <h2>Form Review</h2>
      <p className="hint">Please check your details before submitting.</p>

      <table className="review-table">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th>{row.label}</th>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FormReview;
