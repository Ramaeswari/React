export const increment = (numb) =>{
    return{
        type:'increment',
        payload: numb,
    };
};

export const decrement = () =>{
    return{
        type:'decrement',
    };
};