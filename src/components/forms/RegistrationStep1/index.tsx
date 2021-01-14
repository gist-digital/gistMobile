import React, {FC} from 'react';
import {Formik, FormikHelpers} from 'formik';
import {object, string} from 'yup';

import {
  INVALID_EMAIL,
  REQUIRED_EMAIL,
  REQUIRED_FIELD,
} from '@src/utils/constants';
import Box from '../../content/Box';
import Button from '../../inputs/Button';
import TextInput from '../../inputs/TextInput';
import {RegistrationStep1Data, FormProps} from '@src/interfaces/forms';

const initialValues = {name: '', email: ''};
const validationSchema = object().shape({
  name: string().required(REQUIRED_FIELD),
  email: string().email(INVALID_EMAIL).required(REQUIRED_EMAIL),
});

const RegistrationStep1: FC<FormProps<RegistrationStep1Data>> = ({
  handleSubmit,
}) => {
  const onSubmit = async (
    values: RegistrationStep1Data,
    actions: FormikHelpers<RegistrationStep1Data>,
  ) => {
    await handleSubmit(values);
    actions.setSubmitting(false);
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}>
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        isSubmitting,
        handleSubmit: formikHandleSubmit,
      }) => (
        <>
          <Box marginTop="s" marginBottom="xl12">
            <TextInput
              marginBottom="m"
              value={values.name}
              placeholder="First name"
              onBlur={handleBlur('name')}
              onChangeText={handleChange('name')}
              error={touched.name && errors.name ? errors.name : ''}
            />

            <TextInput
              value={values.email}
              placeholder="Email address"
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
              error={touched.email && errors.email ? errors.email : ''}
            />
          </Box>

          <Button
            label="Next"
            type="outline"
            disabled={isSubmitting}
            onPress={formikHandleSubmit}
          />
        </>
      )}
    </Formik>
  );
};

export default RegistrationStep1;
