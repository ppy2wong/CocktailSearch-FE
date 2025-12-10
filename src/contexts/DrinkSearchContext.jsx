import React, { createContext, useState, useEffect, useContext } from "react";

const DrinkSearchContext = createContext();

export const DrinkSearchProvider = ({ children }) => {

    const [drinks, setDrinks] = useState([]);
    const [selectedDrinkId, setSelectedDrinkId] = useState(-1);
    const [recipe, setRecipe] = useState(null);

    const [searchBy, setSearchBy] = useState("s");
    const [searchString, setSearchString] = useState("margarita");
    const [searchCount, setSearchCount] = useState(0);


    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${selectedDrinkId}`)
        .then(response => response.json())
        .then(data => { 
            if(data.drinks != null) {
                setRecipe(data.drinks[0]);
            } 
        })
    },[selectedDrinkId]);


    const handleSelectDrink = (idDrink) => {
        setSelectedDrinkId(idDrink);
    }

    const handleSelectSearchBy = (searchByValue) => {
        setSearchBy(searchByValue);
        setRecipe(null);
    }

    const handleChangeSearchString = (searchString) => {
        setSearchString(searchString);
        setRecipe(null);

    }

    const handleSearchButtonClick = () => {
        setSearchCount(searchCount + 1);

        let searchUrl = "";
        switch(searchBy) {
            case "cocktail": 
                searchUrl = "search.php?s="
                break;
            case "ingredient":
                searchUrl = "filter.php?i=";
                break;
            default:
                searchUrl = "search.php?s=";
                break;

        }
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/${searchUrl}${searchString}`)
        .then(response => response.json())
        .then(data => { 
        setDrinks(data.drinks); 
        })
    }

    return (
        <DrinkSearchContext value={{drinks, 
                selectedDrinkId, 
                recipe, 
                searchBy,
                searchString,
                searchCount,
                handleSelectDrink, 
                handleSelectSearchBy, 
                handleChangeSearchString,
                handleSearchButtonClick }}>
            {children}
        </DrinkSearchContext>
    )
}

export const useDrinkSearchContext = () => {
    const ctx = useContext(DrinkSearchContext);
    if(!ctx) throw new Error("dude where's my context");
    return ctx;
}