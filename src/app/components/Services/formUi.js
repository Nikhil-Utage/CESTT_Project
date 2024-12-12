'use client'


import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { ApiConfig } from "../API/ApiConfig";
import { validationSchema } from "./schema";

const FormUi = () => {
  const [msg, setMsg] = useState(null);
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(ApiConfig.newUser, values);
      setMsg(response.data.msg);

      
      resetForm();


      setTimeout(() => {
        setMsg(null);
      }, 2000);
    } catch (error) {
     
      console.error("Submission error:", error);
    }
  };


  const clearMessage = () => {
    setMsg(null);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', mobile: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors }) => (
        <Form className="max-w-md mx-auto p-4 bg-white  rounded">
          <div className="mb-9">
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={`w-full py-2 border-b border-black focus:outline-none pb-9 placeholder:text-black ${touched.name && errors.name ? 'border-red-500' : ''}`}
            />
            {touched.name && errors.name ? (
              <div className="text-red-600 text-sm mt-1">{errors.name}</div>
            ) : null}
          </div>
          <div className="mb-9">
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={`w-full py-2 border-b border-black focus:outline-none pb-9 placeholder:text-black ${touched.email && errors.email ? 'border-red-500' : ''}`}
            />
            {touched.email && errors.email ? (
              <div className="text-red-600 text-sm mt-1">{errors.email}</div>
            ) : null}
          </div>
          <div className="mb-9">
            <Field
              type="text"
              name="mobile"
              placeholder="Phone Number"
              className={`w-full py-2 border-b border-black focus:outline-none pb-9 placeholder:text-black ${touched.phone && errors.phone ? 'border-red-500' : ''}`}
            />
            {touched.mobile && errors.mobile ? (
              <div className="text-red-600 text-sm mt-1">{errors.mobile}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full bg-[#437FC7] text-white font-poppins font-medium rounded-[20px] py-[18px] hover:bg-blue-700 transition duration-200"
          >
            Apply Online Now
          </button>
          {msg && <span className="mt-4 inline-block text-green-800">{msg}</span>}

        </Form>
      )}
    </Formik>
  );
};

export default FormUi;