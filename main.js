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
const renderMealCategories = (mealCategoriesArray) => {
  console.log("renderMealCategories");
  console.table(mealCategoriesArray);

  // find and select a UL with meal categories ID dom element to append my data into
  const mealCategoriesList = document.body.querySelector(
    "#meal-categories-list"
  );
  // for each element in our meal categoties array
  mealCategoriesArray.forEach((mealCategory) => {
    // create a wrapping element maybe <li> class of card
    const mealCategoryListItem = document.createElement("li");
    mealCategoryListItem.className = "meal-category-card";
    //append the li.card to DOM
    mealCategoriesList.appendChild(mealCategoryListItem);

    //display the category name, image, and description
    // image
    // crete an img element
    const mealCategoryImg = document.createElement("Img");
    // set img src to category thumbnail url
    mealCategoryImg.src = mealCategory.strCategoryThumb;
    // give it a mobile friendly max width of like 300px
    mealCategoryImg.style.width = 300;
    // appendChild the img to our card
    mealCategoryListItem.appendChild(mealCategoryImg);
    // name
    // create an h4 element
    const mealCategoryName = document.createElement("h4");
    // set h4 element textContent to be meal category name
    mealCategoryName.textContent = mealCategory.strCategory;
    // appendChild the h4 to our card
    mealCategoryListItem.appendChild(mealCategoryName);
    // description
    // create an p element
    const mealCategoryDescription = document.createElement("p");
    // set p element textContent to be meal category description
    mealCategoryDescription.textContent = mealCategory.strCategoryDescription;
    // appendChild the p to our card
    mealCategoryListItem.appendChild(mealCategoryDescription);
  });
};

// function to call when form input is given focus
const handleFormInputFocus = async () => {
  console.log("focus");

  const mealCategoriesObj = await getMealCategories();
  renderMealCategories(mealCategoriesObj);
};

// add event listener to search term input
searchTermsInput.addEventListener("focus", handleFormInputFocus);
