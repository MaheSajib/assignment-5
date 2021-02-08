const searchMeals = () => {
    const mealSearch = document.getElementById('mealInput').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=+${mealSearch}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))

}
const displayMeals = meals => {
    const mealList = document.getElementById('meal-list');
    mealList.innerHTML = ' ';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'mealList'
        mealDiv.innerHTML = `
        <img id="thumbPic" src="${meal.strMealThumb}">
        <h2 onclick="mealDetail('${meal.strIngredient1}','${meal.strIngredient2}','${meal.strIngredient3}','${meal.strIngredient4}','${meal.strIngredient5}','${meal.strIngredient6}','${meal.strIngredient7}','${meal.strIngredient8}','${meal.strIngredient9}','${meal.strIngredient10}')">${meal.strMeal}</h2>
        `
        mealList.appendChild(mealDiv);
    });
}

const mealDetail = (name, name2, name3, name4, name5, name6, name7, name8, name9, name10) => {
    const detailsDiv = document.getElementById('meal-detail');
    detailsDiv.innerText = name + ' | ' + name2 + ' | ' + name3 + ' | ' + name4 + ' | ' + name5 + ' | ' + name6 + ' | ' + name7 + ' | ' + name8 + ' | ' + name9 + ' | ' + name10;
}
