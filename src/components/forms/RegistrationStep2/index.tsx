import React, {FC} from 'react';
import {Formik, FormikHelpers} from 'formik';
import {object, string} from 'yup';

import Box from '../../content/Box';
import Button from '../../inputs/Button';
import TextInput from '../../inputs/TextInput';
import {REQUIRED_PASSWORD, REQUIRED_FIELD} from '@src/utils/constants';
import {RegistrationStep2Data, FormProps} from '@src/interfaces/forms';

const initialValues = {username: '', password: '', confirmPassword: ''};
const validationSchema = object().shape({
  username: string().required(REQUIRED_FIELD),
  password: string().required(REQUIRED_PASSWORD),
  confirmPassword: string().required(REQUIRED_PASSWORD),
});

const RegistrationStep2: FC<FormProps<RegistrationStep2Data>> = ({
  handleSubmit,
}) => {
  const onSubmit = async (
    values: RegistrationStep2Data,
    actions: FormikHelpers<RegistrationStep2Data>,
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
              placeholder="Username"
              value={values.username}
              onBlur={handleBlur('username')}
              onChangeText={handleChange('username')}
              error={touched.username && errors.username ? errors.username : ''}
            />

            <TextInput
              marginBottom="m"
              secureTextEntry
              placeholder="Password"
              value={values.password}
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              error={touched.password && errors.password ? errors.password : ''}
            />

            <TextInput
              secureTextEntry
              placeholder="Confirm password"
              value={values.confirmPassword}
              onBlur={handleBlur('confirmPassword')}
              onChangeText={handleChange('confirmPassword')}
              error={
                touched.confirmPassword && errors.confirmPassword
                  ? errors.confirmPassword
                  : ''
              }
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

export default RegistrationStep2;
