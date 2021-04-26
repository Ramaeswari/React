import {React} from 'react';
import './book-styles.css';

const Book = ({name, price, YOB}) =>{
    return(
        <div>
            <table  border="1" className="book-details">
            
            <tbody >
                <tr >
                    <td className="tableRows">{name}</td>
                    <td>{price}</td>
                    <td>{YOB}</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}
export default Book;

// <div>
//             <h3>{name}</h3>
//             <span>{price}</span>
//             <span>  {YOB}</span>
//         </div>

