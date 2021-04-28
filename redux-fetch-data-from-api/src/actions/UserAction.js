export const fetchUsersSuccess = (users) =>{
    return{
        type: 'fetchUsersSuccess',
        payload: users,
    }
}