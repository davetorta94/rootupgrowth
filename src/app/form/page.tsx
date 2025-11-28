"use client";

import { FormComponent } from "@/components/formComponent";
import { getEnvVariables } from "../../helpers/getEnvVariables";
import { useForm } from "../../helpers/useForm";
import emailjs from "@emailjs/browser";
import { useState } from "react";


type ContactFormFields = {
  name: string;
  email: string;
  message: string;
};

// ----------------------------
const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY_ID } = getEnvVariables();

const contactFields: ContactFormFields = {
  name: "",
  email: "",
  message: "",
};

export default function Form() {
  const { onInputChange, name, email, message } =
  useForm<ContactFormFields>(contactFields);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Por favor, rellena todos los campos.");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY_ID)
      .then((result) => {
        console.log("Correo enviado:", result.text);
        alert("Correo enviado correctamente");
        setSubmitted(true);
        console.log(submitted)
      })
      .catch((error) => {
        console.log("Error al enviar el correo:", error.text);
        alert("Hubo un error al enviar el correo");
      });
  };

  return (
    <>
      <section className="flex justify-center w-full h-200">
        <FormComponent
          name={name}
          email={email}
          message={message}
          onInputChange={onInputChange}
          onSubmit={handleSubmit}
        />
      </section>
    </>
  );
}
