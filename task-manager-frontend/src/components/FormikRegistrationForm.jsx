import { useFormik } from "formik";

function FormikRegistrationForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Formik Registration Form</h1>

        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default FormikRegistrationForm;