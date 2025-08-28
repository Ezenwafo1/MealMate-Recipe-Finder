// src/components/LoginForm.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const LoginForm = ({ onLogin, users }) => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting, setFieldError }) => {
    const user = users.find(u => u.email === values.email && u.password === values.password);
    if (user) {
      onLogin(user);
      navigate("/");
    } else {
      setFieldError("email", "Invalid credentials");
      setFieldError("password", "Invalid credentials");
    }
    setSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
          Login to MealMate
        </h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              <div>
                <Field type="email" name="email" placeholder="Email" className="w-full p-2 rounded border dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100" />
                <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <Field type="password" name="password" placeholder="Password" className="w-full p-2 rounded border dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100" />
                <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-md transition disabled:opacity-50">
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
