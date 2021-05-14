import { GET_RECIPE } from "../constant/types";

const initialState = {
    recipes: [
        {
            id: 1,
            title: "Chiken Udon Stirfry Recipe",
            image: "https://www.edamam.com/web-img/36a/36af17a8cb3e7592cc4b6ccf750c75de.jpg",
            calories: "2201.9550349529163 kcal",
            fat: "37.81289187148946 g",
            type: "Non-Veg"
        },
        {
            id: 2,
            title: "Apple Ice recipes",
            image: "https://www.edamam.com/web-img/dbd/dbd4bd58ebc7f049e17a320e18f72415",
            calories: "1258.557999999773 kcal",
            fat: "2.136839999997525 g",
            type: "Veg"
        },
        {
            id: 3,
            title: "Egg Nests recipes",
            image: "https://www.edamam.com/web-img/4ea/4ea44da2c9c5b7f712b4a93840a2607d",
            calories: "259.27000000000004 kcal",
            fat: "18.8508 g",
            type: "Non-Veg"
        },
        {
            id: 4,
            title: "Apple-Gruyere Scone",
            image: "https://www.edamam.com/web-img/e4b/e4b9bf707dedd5f5b9fe7f786cf3ace3.jpg",
            calories: "5149.457999997889 kcal",
            fat: "309.46443 g" ,
            type: "Veg"
        },
        {
            id: 5,
            title: "Rolled Egg recipes",
            image: "https://www.edamam.com/web-img/82c/82c413a96206893705fa57e626d122b4",
            calories: "127.50076969032132 kcal",
            fat: "10.762882619054478 g",
            type: "Non-Veg"
        },
        {
            id: 6,
            title: "Apple Ice recipes",
            image: "https://www.edamam.com/web-img/dbd/dbd4bd58ebc7f049e17a320e18f72415",
            calories: "1258.557999999773 kcal",
            fat: "2.136839999997525 g",
            type: "Veg"
        },
        {
            id: 7,
            title: "Chiken Tikka Masala Recipe",
            image: "https://www.edamam.com/web-img/54d/54dab1e05119c8ac27960ac182f03ed8.jpg",
            calories: "2197.488084399862 kcal",
            fat: "133.03644855499863 g",
            type: "Non-Veg"
        },
        {
            id: 8,
            title: "Banana Doughnuts",
            image: "https://www.edamam.com/web-img/b3b/b3b5320f00cedfacc789b4ee8bccb51e.jpg",
            calories: "4757.3651",
            fat: "211.3233825 g",
            type: "Veg"
        },
        {
            id: 9,
            title: "Egg Sandwich",
            image: "https://www.edamam.com/web-img/4f3/4f37381ccbd1baec9281403d03555e53.jpg",
            calories: "557.0249857966313 kcal",
            fat: "38.52191830423663 g",
            type: "Non-Veg"
        },
        {
            id: 10,
            title: "Apple Butter",
            image: "https://www.edamam.com/web-img/ccf/ccffc8a98f443012071e4bb3f33bdf3e.jpg",
            calories: "711.4947627868356 kcal",
            fat: "2.0337693953400002 g",
            type: "Veg"
        },
        {
            id: 11,
            title: "Thomato Chicken",
            image: "https://www.edamam.com/web-img/a23/a2300a1c6b33bee0963f380782d48e27.jpg",
            calories: "2029.1895792685948 kcal",
            fat: "174.63305556185102 g",
            type: "Non-Veg"
        },
        {
            id: 12,
            title: "Chocolate & Banana",
            image: "https://www.edamam.com/web-img/a2c/a2cb2a29a29eb7e08b5b0f7719457f9d.jpg",
            calories: "114.66149999893197 kcal",
            fat: "3.6309674999418435 g",
            type: "Veg"
        },
        {
            id: 13,
            title: "Chocolate Dipped Strawberries",
            image: "https://www.edamam.com/web-img/3c5/3c558709195198381a8d5c535d72a265.jpg",
            calories: "2389.1287641625004 kcal",
            fat: "152.35548549037503 g",
            type: "Veg"
        },
    ],
    recipe: null,
    filter: "",
    aboutDetails: {
        aboutImg: "https://i.pinimg.com/originals/ea/aa/f2/eaaaf2bbdce3d0dc7126d308949b7d7c.jpg",
        paragraph: "Food in the south is intrinsically connected to life in the south. It is through eating, sharing, and creating food that pleasure is evoked,connections are forged, context is offerd, and history is created. Across southern states, individual interpretations of food are as varied and compelling as the people who live in our unique cities and towns. Yet ",
        quotation: "We celebrate people, reveal processes, share receipes, and most of all, we have fun."
    }
}

export const recipeReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_RECIPE:
            let arr = state.recipes.filter(recipe => recipe.id == action.payload);
            arr = arr.values();
            for(let val of arr){
                arr =val;
            }
            return {
                ...state,
                recipe: arr
            }
        default:
            return state;
    }
}