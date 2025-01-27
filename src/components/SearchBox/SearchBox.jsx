import { Field, Form, Formik } from 'formik';
import s from './SearchBox.module.css';

const SearchBox = handleSearch => {
  const initialValues = { value: '' };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={values => handleSearch(values)}
      >
        <Form className={s.search}>
          <label htmlFor="search">Find contacts by name:</label>
          <Field id="search" name="value" />
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBox;
