import React, {useState} from 'react';
import {Button, TextInput, View, Text} from 'react-native';
import {Formik} from 'formik';
//! This is formik example page
export const MyReactNativeForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const handleSubmit = async (values, {resetForm}) => {
    setSubmitting(true);
    setSubmissionError(null);
    setSubmissionSuccess(false);

    try {
      // Simulating asynchronous form submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Form submission successful
      setSubmissionSuccess(true);
      resetForm();
    } catch (error) {
      // Form submission error
      setSubmissionError('An error occurred while submitting the form.');
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{email: ''}}
      validate={validate}
      onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Enter your email"
          />
          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}
          {submissionError && (
            <Text style={styles.error}>{submissionError}</Text>
          )}
          {submissionSuccess && (
            <Text style={styles.success}>Form submitted successfully!</Text>
          )}
          <Button
            onPress={handleSubmit}
            title={submitting ? 'Submitting...' : 'Submit'}
            disabled={submitting}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = {
  error: {
    color: 'red',
    marginBottom: 10,
  },
  success: {
    color: 'green',
    marginBottom: 10,
  },
};
