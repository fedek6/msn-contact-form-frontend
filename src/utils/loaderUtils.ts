import type { AvailableLanguages } from "../i18n/ui";

export function showLoader() {
  const loader = document.querySelector("#loader");
  if (loader) {
    loader.classList.remove("hidden");
    loader.classList.add("flex");
  }
}

export function hideLoader() {
  const loader = document.querySelector("#loader");
  if (loader) {
    loader.classList.add("hidden");
    loader.classList.remove("flex");
  }
}

export const redirectToThankYouPage = (lang: AvailableLanguages) => {
  // Use the URL API to manipulate the current URL
  const currentUrl = new URL(window.location.href);
  // Append the 'thank-you' segment to the pathname

  switch (lang) {
    case "pl":
      currentUrl.pathname += "dziekujemy";
      break;
    case "en":
      currentUrl.pathname += "thank-you";
      break;
  }

  // Redirect to the new URL
  window.location.href = currentUrl.href;
};
