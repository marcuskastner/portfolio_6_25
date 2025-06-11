import { useState } from "react";
import { notification } from "antd";

interface IValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const values = formState.values;
    const errors = validate(values);

    if (Object.values(errors).some((error) => error)) {
      event.preventDefault();
      setFormState((prevState) => ({ ...prevState, errors }));

      const firstErrorMessage = Object.values(errors).find((e) => e);

      notification.error({
        message: "Validation Error",
        description: firstErrorMessage || "Please fix the errors in the form.",
      });
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(JSON.stringify(values)).toString(),
    })
      .then(() => {
        notification.success({
          message: "Success",
          description: "Your message has been sent!",
        });
      })
      .catch((error) => alert(error));

    setTimeout(() => {
      setFormState(() => ({
        values: { ...initialValues },
        errors: { ...initialValues },
      }));
    }, 100);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
