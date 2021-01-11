export type FormProps<T> = {
  handleSubmit: (payload: T) => void;
};

export type LoginFormData = {
  email: string;
  password: string;
};
