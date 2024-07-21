import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string().min(3).max(50).required("Required"),
});

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit({ ...values, id: nanoid() });
        resetForm();
      }}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Name
          <Field name="name" type="text" className={s.input} />
          <ErrorMessage name="name" component="div" className={s.error} />
        </label>
        <label className={s.label}>
          Number
          <Field name="number" type="text" className={s.input} />
          <ErrorMessage name="number" component="div" className={s.error} />
        </label>
        <button type="submit" className={s.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
