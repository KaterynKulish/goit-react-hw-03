import { Field, Form, Formik } from 'formik';
import ContactList from '../ContactList/ContactList';
import Contact from '../Contact/Contact';
import s from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    const newContact = {
      id: crypto.randomUUID(),
      ...values,
    };
    addContact(newContact);
    // actions.resetForm();
  };

  return (
    <section className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label htmlFor="name" className={s.label}>
            Name
          </label>
          <Field name="name" type="string" id="name" />

          <label htmlFor="number">Number</label>
          <Field name="number" type="tel" id="number" />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </section>
  );
};

export default ContactForm;
