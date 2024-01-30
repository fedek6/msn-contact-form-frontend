export const languages = {
  pl: "Polski",
  en: "English",
};

export const defaultLang = "pl";

export const ui = {
  pl: {
    "txt.header": "Dołącz do naszej listy kontaktowej",
    "form.name": "Imię",
    "form.surname": "Naziwsko",
    "form.email": "E-mail",
    "form.institution": "Instytucja",
    "form.not_empty": "To pole nie może być puste",
    "form.email_error": "Niepoprawny adres e-mail",
    "form.terms":
      "Wyrażam zgodę na przetwarzanie danych osobowych wskazanych w formularzu w celu przesłania przez Muzeum Sztuki Nowoczesnej w Warszawie (ul. Pańska 3, 00-124, Warszawa) informacji o prowadzonych przez Muzeum działaniach promocyjnych",
    "form.submit": "Wyślij",
  },
  en: {
    "txt.header": "Join our contact list:",
    "form.name": "Name",
    "form.surname": "Surname",
    "form.email": "E-mail",
    "form.institution": "Institution",
    "form.not_empty": "This field cannot be empty",
    "form.email_error": "Invalid e-mail address",
    "form.terms":
      "I agree to the processing of personal data indicated in the form in order to send information about promotional activities carried out by the Museum of Modern Art in Warsaw (Pańska st. 3, 00-124, Warsaw)",
    "form.submit": "Send",
  },
} as const;

export type AvailableLanguages = keyof typeof ui;
