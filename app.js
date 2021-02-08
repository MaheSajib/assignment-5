const searchMeals = () =>{
    const mealSearch = document.getElementById('mealInput').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=+${mealSearch}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))

}
const displayMeals = meals =>{
    const mealList = document.getElementById('meal-list');
    mealList.innerHTML = ' ';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'mealList'
        mealDiv.innerHTML =`
        <img id="thumbPic" src="${meal.strMealThumb}">
        <h2 onclick="mealDetail('${meal.strMealThumb}','${meal.strMeal}')">${meal.strMeal}</h2>
    `
        mealList.appendChild(mealDiv);
    });
}

const mealDetail = (img, name) =>{
    
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=+${img}/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealsDetails(data.meal))
}
const displayMealsDetails = ingredient => {
    const detailsDiv = document.getElementById('meal-detail');
    detailsDiv.innerText = ingredient;
}