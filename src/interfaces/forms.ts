export type FormProps<T> = {
  handleSubmit: (payload: T) => void;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type RegistrationStep1Data = {
  name: string;
  email: string;
};

export type RegistrationStep2Data = {
  username: string;
  password: string;
  confirmPassword: string;
};
