// src/components/SignUpForm.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpForm = ({ onSignUp }) => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    expertise: "",
    acceptTerms: false
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirm your password"),
    acceptTerms: Yup.bool().oneOf([true], "You must accept the terms")
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const newUser = {
      id: Date.now(),
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      expertise: values.expertise,
      verified: false
    };
    onSignUp(newUser);
    setSubmitting(false);
    resetForm();
    alert("Your account is submitted! Wait for admin verification.");
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">Join MealMate Community</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <Field type="text" name="fullName" placeholder="Full Name" className="w-full p-2 rounded border dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100" />
              <ErrorMessage name="fullName" component="p" className="text-red-500 text-sm mt-1" />

              <Field type="email" name="email" placeholder="Email" className="w-full p-2 rounded border dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100" />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />

              <Field type="password" name="password" placeholder="Password" className="w-full p-2 rounded border dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100" />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />

              <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full p-2 rounded border dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100" />
              <ErrorMessage name="confirmPassword" component="p" className="text-red-500 text-sm mt-1" />

              <Field type="text" name="expertise" placeholder="Expertise / Favorite Dish (optional)" className="w-full p-2 rounded border dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100" />

              <div className="flex items-center space-x-2">
                <Field type="checkbox" name="acceptTerms" className="rounded border dark:border-gray-700" />
                <label className="text-sm text-gray-700 dark:text-gray-300">I accept the terms and conditions</label>
              </div>
              <ErrorMessage name="acceptTerms" component="p" className="text-red-500 text-sm mt-1" />

              <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white py-2 rounded hover:bg-green-700 transition">
                {isSubmitting ? "Submitting..." : "Join Community"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUpForm;
