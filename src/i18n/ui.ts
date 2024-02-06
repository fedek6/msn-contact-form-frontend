export const languages = {
  pl: "Polski",
  en: "English",
};

export const defaultLang = "pl";

export const ui = {
  pl: {
    "txt.header": "Dołącz do naszej listy kontaktowej",
    "form.name": "Imię",
    "form.surname": "Nazwisko",
    "form.email": "E-mail",
    "form.institution": "Instytucja",
    "form.not_empty": "To pole nie może być puste",
    "form.email_error": "Niepoprawny adres e-mail",
    "form.terms":
      "Wyrażam zgodę na przetwarzanie danych osobowych wskazanych w formularzu w celu przesłania przez Muzeum Sztuki Nowoczesnej w Warszawie (ul. Pańska 3, 00-124, Warszawa) informacji o prowadzonych przez Muzeum działaniach promocyjnych",
    "form.submit": "Wyślij",
    "form.send_error": "Przperszamy, wystąpił błąd podczas wysyłania formularza.",
    "txt.disclaimer": `Administratorem danych osobowych jest Muzeum Sztuki Nowoczesnej w Warszawie
    (ul. Pańska 3, 00-124, Warszawa). Więcej informacji na temat przetwarzania i
    ochorny danych osobowych znajdziesz w naszej <a
        class="underline"
      href="https://artmuseum.pl/pl/polityka-prywatnosci"
      target="_blank">Polityce Prywatności</a
    >.`,
    "form.missing_fields": "Wypełnij wszystkie pola formularza",
    "form.record_exists": "Ten adres e-mail jest już zapisany w naszej bazie danych",
    "form.unknown_error": "Wystąpił nieznany błąd podczas przetwarzania formularza",
  },
  en: {
    "txt.header": "Join our contact list",
    "form.name": "Name",
    "form.surname": "Surname",
    "form.email": "E-mail",
    "form.institution": "Institution",
    "form.not_empty": "This field cannot be empty",
    "form.email_error": "Invalid e-mail address",
    "form.terms":
      "I agree to the processing of personal data indicated in the form in order to send information about promotional activities carried out by the Museum of Modern Art in Warsaw (Pańska st. 3, 00-124, Warsaw)",
    "form.submit": "Send",
    "form.send_error": "Sorry, an error occurred while sending the form.",
    "txt.disclaimer": `The administrator of personal data is the Museum of Modern Art in Warsaw (Pańska st. 3, 00-124, Warsaw). More information about the processing and protection of personal data can be found in our <a class="underline" href="https://artmuseum.pl/en/polityka-prywatnosci" target="_blank">Privacy Policy</a>.`,
    "form.missing_fields": "Fill in all the form fields",
    "form.record_exists": "This e-mail address is already saved in our database",
    "form.unknown_error": "An unknown error occurred while processing the form",
  },
} as const;

export type AvailableLanguages = keyof typeof ui;
export type TranslationKeys = keyof typeof ui[typeof defaultLang];