import React, { type FormEvent } from "react";
import { TextInputGroup } from "./TextInputGroup";
import { useTranslations } from "../i18n/utils";
import type { AvailableLanguages, ui } from "../i18n/ui";

interface FormProps {
  lang: AvailableLanguages;
}

type FieldName = "name" | "surname" | "institution" | "email";

interface Field {
  value: string;
  isValid: boolean;
  errorMsg: string;
}

type FormState = {
  [Property in FieldName]: Field;
};

type Validator = (value: string) => {
  isValid: boolean;
  errorMsg: keyof (typeof ui)["pl"];
};

type Validators = {
  [Property in FieldName]: Validator;
};

type FormAction =
  | { type: "SET_NAME"; payload: Field }
  | { type: "SET_SURNAME"; payload: Field }
  | { type: "SET_EMAIL"; payload: Field }
  | { type: "SET_INSTITUTION"; payload: Field };

const initialState: FormState = {
  name: {
    value: "",
    isValid: true,
    errorMsg: "",
  },
  surname: {
    value: "",
    isValid: true,
    errorMsg: "",
  },
  email: {
    value: "",
    isValid: true,
    errorMsg: "",
  },
  institution: {
    value: "",
    isValid: true,
    errorMsg: "",
  },
};

const validators: Validators = {
  name: (value: string) => ({
    isValid: value.length > 0,
    errorMsg: "form.not_empty",
  }),
  surname: (value: string) => ({
    isValid: value.length > 0,
    errorMsg: "form.not_empty",
  }),
  email: (value: string) => ({
    isValid:
      value.length > 0 &&
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value),
    errorMsg: value.length === 0 ? "form.not_empty" : "form.email_error",
  }),
  institution: (value: string) => ({
    isValid: value.length === 0 || value.length > 1,
    errorMsg: "form.not_empty",
  }),
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_SURNAME":
      return { ...state, surname: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_INSTITUTION":
      return { ...state, institution: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}

const isFieldName = (name: string): name is FieldName =>
  ["name", "surname", "institution", "email"].includes(name);

export const Form: React.FC<FormProps> = ({ lang }) => {
  const t = useTranslations(lang);
  const [state, dispatch] = React.useReducer(formReducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (isFieldName(name)) {
      const validationStatus = validators[name](value);

      const action = {
        type: `SET_${name.toUpperCase()}`,
        payload: {
          value,
          isValid: validationStatus.isValid,
          errorMsg: t(validationStatus.errorMsg),
        },
      } as FormAction;
      dispatch(action);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle your form submission logic here
    console.log("Form submitted:", state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInputGroup
        id="name-input"
        isValid={state.name.isValid}
        isRequired={true}
        onChange={handleChange}
        errorMsg={state.name.errorMsg}
        name="name"
        value={state.name.value}
      >
        {t("form.name")}
      </TextInputGroup>

      <TextInputGroup
        id="surname-input"
        isValid={state.surname.isValid}
        isRequired={true}
        onChange={handleChange}
        errorMsg={state.surname.errorMsg}
        name="surname"
        value={state.surname.value}
      >
        {t("form.surname")}
      </TextInputGroup>

      <TextInputGroup
        id="email-input"
        isValid={state.email.isValid}
        isRequired={true}
        onChange={handleChange}
        errorMsg={state.email.errorMsg}
        name="email"
        value={state.email.value}
      >
        {t("form.email")}
      </TextInputGroup>

      <TextInputGroup
        id="institution-input"
        isValid={state.institution.isValid}
        isRequired={false}
        onChange={handleChange}
        errorMsg={state.institution.errorMsg}
        name="institution"
        value={state.institution.value}
      >
        {t("form.institution")}
      </TextInputGroup>

      <div className="flex gap-3">
        <div>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            className="w-8 h-8 bg-gray-300 border border-gray-400"
          />
        </div>
        <label htmlFor="terms" className="text-base">
          {t("form.terms")}
        </label>
      </div>

      <div className="pt-8">
        <button
          type="submit"
          className="bg-black text-white font-warsaw font-bold text-lg py-3 block w-full uppercase"
        >
          Wyślij
        </button>
      </div>
    </form>
  );
};