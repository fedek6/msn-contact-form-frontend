export function showLoader() {
  const loader = document.querySelector("#loader");
  if (loader) {
    loader.classList.remove("hidden");
    loader.classList.add("flex")
  }
}

export function hideLoader() {
  const loader = document.querySelector("#loader");
  if (loader) {
    loader.classList.add("hidden");
    loader.classList.remove("flex")
  }
}
