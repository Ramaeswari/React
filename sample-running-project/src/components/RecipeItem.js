import React from 'react';
// import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
// import './styles.css';
// import {useDispatch} from 'react-redux';
// import { deleteContact } from '../../actions/ContactActions';

const RecipeItem = (props) =>{
    // const dispatch = useDispatch();
    const {title, image, calories, fat,id} = props;
    const [modalIsOpen, setModalIsOpen] = useState(false);

    
    return(
        <div className="card">
            <div className="card-image">
                <img src={image}></img>
            </div>
            <div className="card-content">
                <span className="card-title ">{title}</span>
                <p>Calories: {calories}</p>
                <Link to={`/recipes/${id}`}><button className="btn btn-primary">More Details</button></Link>
                


            </div>
            
                  
        </div>
    )
}
export default RecipeItem;