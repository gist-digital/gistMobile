import React, {FC} from 'react';
import {Formik, FormikHelpers} from 'formik';
import {object, string} from 'yup';

import {
  INVALID_EMAIL,
  REQUIRED_EMAIL,
  REQUIRED_PASSWORD,
} from '@src/utils/constants';
import Box from '../../content/Box';
import Button from '../../inputs/Button';
import TextInput from '../../inputs/TextInput';
import {LoginFormData, FormProps} from '@src/interfaces/forms';

const initialValues = {email: '', password: ''};
const validationSchema = object().shape({
  email: string().email(INVALID_EMAIL).required(REQUIRED_EMAIL),
  password: string().required(REQUIRED_PASSWORD),
});

const Login: FC<FormProps<LoginFormData>> = ({handleSubmit}) => {
  const onSubmit = async (
    values: LoginFormData,
    actions: FormikHelpers<LoginFormData>,
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
          <Box marginBottom="xl6">
            <TextInput
              marginBottom="m"
              value={values.email}
              placeholder="Email address"
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
              error={touched.email && errors.email ? errors.email : ''}
            />

            <TextInput
              secureTextEntry
              placeholder="Password"
              value={values.password}
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              error={touched.password && errors.password ? errors.password : ''}
            />
          </Box>

          <Button
            label="Sign in"
            disabled={isSubmitting}
            onPress={formikHandleSubmit}
          />
        </>
      )}
    </Formik>
  );
};

export default Login;
