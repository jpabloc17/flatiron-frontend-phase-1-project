const searchTermsInput = document.getElementById("search-terms");
const handleFormInputFocus = async () => {
  console.log("focus");

  await getMealCategories();
};

const searchTermsInput = document.getElementById("search-terms");

searchTermsInput.addEventListener("focus", handleFormInputFocus);
