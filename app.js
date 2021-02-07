const search = document.getElementById('search-btn').addEventListener('click', function() {
   const mealSearch = document.getElementById('mealInput').value;
fetch('https://www.themealdb.com/api/json/v1/1/search.php?f='+mealSearch)
    .then(res => res.json())
    .then(res => displayMeals(res.meals));
})





// fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
//     .then(res => res.json())
//     .then(res => displayMeals(res.meals));


const displayMeals = meals => {
    const mealsDiv = document.getElementById('meals');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = "meal";
        const mealInfo = `
                <img id="thumbPic" src="${meal.strMealThumb}">
                <h3 onclick="displayMealsDetails('${meal.strMeal}')" class="mealName">${meal.strMeal}</h3>
            `
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });
}

// const displayMealsDetails = name =>{
//     const mealSearch = document.getElementById('mealInput').value;
//     fetch('https://www.themealdb.com/api/json/v1/1/search.php?f='+mealSearch)
//     .then(res => res.json())
//     .then(meal => console.log(meal[0].strMeal));

    // fetch(url)
    // .then(res => res.json())
    // .then(data => mealInfo(data[0]));
// }

// const mealList = meal => {
//     const mealDiv = document.getElementById('mealDetail');
//     mealDiv.innerHTML =`
//         <img id="thumbPic" src="${meal.strMealThumb}">
//         <h1>${meal.strMeal}</h1>
//         <p>${meal.strIngredient1}</p>
//     `
// }