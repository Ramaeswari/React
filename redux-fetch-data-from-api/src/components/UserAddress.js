export const UserAddress = (props) =>{
    const { name, education, user} = props;
    console.log(user,name);
    return (
        <div>
        
           <p><b>Address: </b>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            <p><b>Email: </b>{user.email}   <b>Phone Number: </b>{user.phone}</p>
        </div>
    )
}
