import React from "react";
import styles from "../../UI/Form/Form.module.css";

type FormProps = {
  submitFunc(values: Record<string, string>): void;
  values: Record<string, string>;
  children: React.ReactNode;
  buttonText: string;
};

const Form: React.FC<FormProps> = ({
  submitFunc,
  values,
  children,
  buttonText,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    submitFunc(values);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {children}
      <button type="submit" className="button">
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
