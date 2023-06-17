// get search field input
const searchTermsInput = document.getElementById("search-terms");

// fecth meal categories data from TheMealDB API
const getMealCategories = async () => {
  const mealCategoriesApiURL =
    "https://www.themealdb.com/api/json/v1/1/categories.php";

  try {
    const response = await fetch(mealCategoriesApiURL);
    const data = await response.json();
    const categories = data.categories;
    console.log(" data: ", data);
    return categories;
  } catch (error) {
    console.log(error);
    alert("Something went wrong, try again later");
  }
};

// render meal categories data to dom
const renderMealCategories = (mealCategoriesObj) => {
  console.log("renderMealCategories");
  console.table(mealCategoriesObj);
};

// function to call when form input is given focus
const handleFormInputFocus = async () => {
  console.log("focus");

  const mealCategoriesObj = await getMealCategories();
  renderMealCategories(mealCategoriesObj);
};

// add event listener to search term input
searchTermsInput.addEventListener("focus", handleFormInputFocus);
