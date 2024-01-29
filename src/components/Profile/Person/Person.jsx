import React from "react";
import AuthForm from "../../User/AuthForm";
import useAuth from "../../User/use-auth";

const Person = () => {
  const {displayName} = useAuth();
  const [name, surname] = displayName.split("_")

  return (
    <>
      <div>
        <p><b>Name: </b>{name}</p>
        <p><b>Surname: </b>{surname}</p>
        <AuthForm type="edit" text="" buttonText="Отправить" />
      </div>
    </>
  );
};

export default Person;
