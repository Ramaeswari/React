import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import ModalPart from './ModalPart';
import Modal from 'react-modal';
import './modal-styles.css';
import Footer from './Footer';

const RecipeItem = (props) =>{
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
                {/*<Link to={`/recipes/${id}`}><button className="btn btn-primary">More Details</button></Link>*/}
                
                <button onClick={() =>setModalIsOpen(true)} className='btn btn-primary'>More Details</button>
                <Modal isOpen={modalIsOpen} onRequestClose={() =>setModalIsOpen(false)}
                style={{
                    
                    content: {
                      position: 'absolute',
                      top: '10%',
                      left: '400px',
                      right: '500px',
                      
                      border: '1px solid #ccc',
                      background: 'rgb(163, 230, 228)',
                      
                      fontSize: '18px',                      
                      borderRadius: '6px',
                      outline: 'none',
                      padding: '20px'
                    }
                  }} >
                    <img src={image} className="modalImg"></img>
                    <p className="content">Name: {title} </p>
                    <p className="content">Calories: {calories}</p>
                    <p className="content">Fat: {fat}</p>
                    <button onClick={() =>setModalIsOpen(false)} className="btn btn-secondary closeBtn">Close</button>
                    <Link to={`/recipes/${id}`}><button title={title} className="viewBtn btn btn-primary">View More</button></Link>
                </Modal>


            </div>
            
                  
        </div>
    )
    
}
export default RecipeItem;

/* 

<button onClick={() =>setModalIsOpen(true)} className='btn btn-primary'>More Details</button>
                <Modal isOpen={modalIsOpen} onRequestClose={() =>setModalIsOpen(false)}
                style={{
                    
                    content: {
                    //   position: 'absolute',
                      top: '10%',
                      left: '400px',
                      right: '500px',
                      bottom: '200px',
                      border: '1px solid #ccc',
                      background: 'rgb(163, 230, 228)',
                      
                      fontSize: '18px',                      
                      borderRadius: '6px',
                      outline: 'none',
                      padding: '20px'
                    }
                  }} >
                    <img src={image} className="modalImg"></img>
                    <p className="content">Name: {title} </p>
                    <p className="content">Calories: {calories}</p>
                    <p className="content">Fat: {fat}</p>
                    <button onClick={() =>setModalIsOpen(false)} className="btn btn-secondary closeBtn">Close</button>
                </Modal>

*/


/*
    <a className="waves-effect waves-light btn modal-trigger">More Details</a>
                {/* Modal Structure 
                <div id="modal1" className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>

*/