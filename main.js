const handleFormInputFocus = () => {
  console.log("focus");
};

const searchTermsInput = document.getElementById("search-terms");

searchTermsInput.addEventListener("focus", handleFormInputFocus);
