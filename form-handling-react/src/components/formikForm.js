import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Formik Submitted Data:", values);
    alert("Formik Registration successful!");
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4 max-w-sm mx-auto">
          <h2 className="text-xl font-bold">Formik Registration</h2>

          {/* Username Field */}
          <div>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className="border p-2 w-full"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Email Field */}
          <div>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="border p-2 w-full"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Password Field */}
          <div>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="border p-2 w-full"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white p-2 rounded"
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
