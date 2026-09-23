import { useState } from "react";

function BasicInput() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmittedData(formData);

    setFormData({
      name: "",
      email: "",
      password: "",
      age: "",
    });
  }

  function handleReset() {
    setFormData({
      name: "",
      email: "",
      password: "",
      age: "",
    });

    setSubmittedData(null);
  }

  return (
    <div className="form-page">
      <div className="form-card">
        <div className="form-header">
          <h1>Create Account</h1>
          <p>Enter your details to register</p>
        </div>

        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Minimum 6 characters"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>

              <input
                id="age"
                name="age"
                type="number"
                placeholder="Your age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Create Account
            </button>

            <button
              type="button"
              className="reset-button"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>

        {submittedData && (
          <div className="success-box">
            <h3>Registration Successful</h3>
            <p>Name: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
            <p>Age: {submittedData.age}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BasicInput;