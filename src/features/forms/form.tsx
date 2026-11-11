"use client";
import formdata from "./formdata";
import { useState, type ChangeEvent } from "react";
type FormProps = {
  formname: string;
};

export default function Form({ formname }: FormProps) {
  const config = formdata.find((form) => form.formname === formname);

  const [formValues, setFormValues] = useState<Record<string, string>>(() =>
    Object.fromEntries((config?.fields ?? []).map((field) => [field.name, ""])),
  );

  const [status, setStatus] = useState<FormStatus>("idle");

  type FormStatus = "idle" | "submitting" | "success" | "error";
  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";
  const isError = status === "error";

  if (!config) {
    return <p>Form not found</p>;
  }

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <h2>This is a {config.formname} form</h2>
      <form action="">
        {config.fields.map((field) => (
          <div className="formfield" key={field.id}>
            <label htmlFor={`${field.name}-form-input`}>{field.label}:</label>

            {field.type === "textarea" ? (
              <textarea
                id={`${field.name}-form-input`}
                name={field.name}
                placeholder={field.placeholder}
                value={formValues[field.name] ?? ""}
                onChange={handleChange}
              ></textarea>
            ) : (
              <input
                id={`${field.name}-form-input`}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formValues[field.name] ?? ""}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
      </form>
    </>
  );
}
