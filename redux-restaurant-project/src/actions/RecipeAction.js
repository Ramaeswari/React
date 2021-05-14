import { GET_RECIPE } from "../constant/types";

export const getRecipe = (id) =>({
    type: GET_RECIPE,
    payload: id,
})