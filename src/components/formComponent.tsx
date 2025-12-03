import styled from "styled-components";
import React from "react";

// Tipos de los props que el formulario necesita
type FormComponentProps = {
  name: string;
  email: string;
  message: string;
  plan: string;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const FormComponent = ({
  name,
  email,
  message,
  plan,
  onInputChange,
  onSubmit,
}: FormComponentProps) => {
  return (
    <StyledWrapper>
      <form className="form" onSubmit={onSubmit}>
        <p className="form-title">Contact Form</p>

        {/* NAME */}
        <div className="input-container">
          <input
            placeholder="Nombre"
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
          />
        </div>

        {/* EMAIL */}
        <div className="input-container">
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </div>

        {/* MESSAGE */}
        <div className="input-container">
          <textarea
            placeholder="Cuentanos"
            name="message"
            value={message}
            onChange={onInputChange}
          />
        </div>

        <div className="hidden">
          <textarea
            placeholder="plan"
            name="plan"
            value={plan}
            onChange={onInputChange}
          />
        </div>

        <button className="submit hover:bg-black" type="submit">
          Enviar
        </button>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form {
    background-color: #fff;
    display: block;
    padding: 1rem;
    max-width: 350px;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .form-title {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    text-align: center;
    color: #000;
  }

  .input-container {
    position: relative;
  }

  .input-container input, .form button {
    outline: none;
    border: 1px solid #e5e7eb;
    margin: 8px 0;
  }

  .input-container input {
    background-color: #fff;
    padding: 1rem;
    padding-right: 3rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 300px;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  .input-container span {
    display: grid;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    place-content: center;
  }

  .input-container span svg {
    color: #9CA3AF;
    width: 1rem;
    height: 1rem;
  }

  .submit {
    display: block;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background-color: #4F46E5;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    width: 100%;
    border-radius: 0.5rem;
    text-transform: uppercase;
  }

  .submit:hover {
    background-color: #000;
  }

  .signup-link {
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
  }

  .signup-link a {
    text-decoration: underline;
  }`;

 

