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
  console.table(mealCategoriesArray);
  
  // find and select a UL with meal categories ID dom element to append my data into

  // for each element in our meal categoties array
    // create a wrapping element maybe <article> class of card
    //append the article.card to DOM
    //display the category name, image, and description
    // image
      // crete an img element
      // set img src to category thumbnail url
      // give class of category-thumbnail
      // give it a mobile friendly max width of like 300px
      // appendChild the img to our card
    // name
    // create an h4 element
      // set h4 element textContent to be meal category name
      // appendChild the h4 to our card
    // description
    // create an p element
      // set p element textContent to be meal category description
      // appendChild the p to our card
};

// function to call when form input is given focus
const handleFormInputFocus = async () => {
  console.log("focus");

  const mealCategoriesObj = await getMealCategories();
  renderMealCategories(mealCategoriesObj);
};

// add event listener to search term input
searchTermsInput.addEventListener("focus", handleFormInputFocus);
