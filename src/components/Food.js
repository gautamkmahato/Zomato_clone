import React, { useContext, useEffect, useState } from 'react'
import MainSection from './MainSection';
import '../style2.css';

const initialValue = "vegetable"

function Food() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    },[])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${initialValue}&app_id=147bac06&app_key=78f4b151a8cf851a09ca6299d085e333&ingr=5-8`)
        const data = await response.json();
        console.log("data.hits");
        console.log(data.hits);
        setRecipes(data.hits);
    }

    return (
        <>
        
            <div className='container'>
                <h3 className='card-container-header'>Order food online</h3>
                <div className='row'>
                    {recipes.map((data) => (
                        <MainSection key={data.recipe.calories} title={data.recipe.label} cuisineType={data.recipe.cuisineType} dishType={data.recipe.dishType} totalWeight={data.recipe.totalWeight} calories={data.recipe.calories} image={data.recipe.image} totalWeight={data.recipe.totalWeight} />
                    ))}
                </div>
            </div>
            
            
        </>
    )
}

export default Food;