import React, {Component} from 'react';
import './feedback-styles.css';
import Footer from './Footer';
import Notification from './Notification';
// import Alert from '@material-ui/lab/Alert';

class Feedback extends Component{
    state ={
        name:"",
        email: "",
        rating: "",
        comments: "",
        errors: {
            nameError: null,
            emailError: null,
            ratingError: null,
            commentsError: null,
        },
        formValidate: false
    }
    handleChange = e =>{
        
        this.validateForm(e.target);
        
    };
    
    handleSubmit = e =>{
        e.preventDefault();
        // if(this.state.formValidate === true){
        //     // alert("Thanks for your feedback");
        //     // <Alert color="promary">This is a success alert — check it out!</Alert>
        //     // this.callingAlert;
        // }
        // else{
        //     // alert("Enter all fields, if you give feedback");
        // }
    }
    
    validateForm = (val) =>{
        let nameError = this.state.errors.nameError;
        let emailError = this.state.errors.emailError;
        let ratingError = this.state.errors.ratingError;
        let commentsError = this.state.errors.commentsError;
        let formValidate = this.state.formValidate;
        if(val.id === 'name'){
            console.log(val.id)    
            if(val.value.length === 0 )
            {
                nameError = "Name is required";
                formValidate = false;
            }
            else{
                nameError = "";
                formValidate = false;
            }
        }
        if(val.id === 'email'){
            if(val.value.length === 0 )
            {
                emailError = "Email is required";
                formValidate = false;
            }
            else{
                emailError = "";
                formValidate = false;
            }
        }
        if(val.id === 'comments'){
            if(val.value.length === 0 )
            {
                commentsError = "comments is required";
                formValidate = false;
            }
            else{
                commentsError = "";
                formValidate = true;
            }
        }
        this.setState({
            [val.id]: val.value,
            errors: {
                nameError: nameError,
                emailError: emailError,
                ratingError: ratingError,
                commentsError: commentsError,
            },
            formValidate: formValidate,
        })
    }
    render(){
    return(
        <div className="feedbackData">
        <div className="container ">
            <h3 className="feedbackHeading">Feedback page</h3>
            <form onSubmit={this.handleSubmit}>
                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-4 inputLines">
                        <input type="text" name="name" class="form-control " id="name" onChange={this.handleChange}/>
                    </div>
                    <p className="errMsg">{this.state.nameError}</p>
                </div>
                <div class="form-group row">
                    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-4 inputLines">
                        <input type="email" name="email" class="form-control" id="inputEmail"   onChange={this.handleChange}/>
                    </div>
                    <p className="errMsg">{this.state.emailError}</p>
                </div>
                <fieldset class="form-group">
                    <div class="row">
                        <legend class="col-form-label col-sm-2 pt-0"><label className="col-form-label">Rating</label></legend>
                        <div class="col-sm-6 radioBtns">
                        {/*<p>*/}
                        <label>
                          <input class="with-gap " name="rating" type="radio" onChange={this.handleChange} />
                          <span className="excellentRadio">Excellent</span>
                        </label> &nbsp;
                      {/*</p>*/}
                            
                    
                      {/*<p>*/}
                      <label>
                        <input class="with-gap" name="rating" type="radio" onChange={this.handleChange} />
                        <span className="goodRadio">Good</span>
                      </label> &nbsp;
                    {/*</p>*/}
                    {/*<p>*/}
                    <label>
                      <input class="with-gap" name="rating" type="radio" onChange={this.handleChange}  />
                      <span className="averageRadio">Average</span>
                    </label> &nbsp;
                  {/*</p>*/}
                
                  {/*<p>*/}
                  <label>
                    <input class="with-gap" name="rating" type="radio"  onChange={this.handleChange}/>
                    <span className="dissatificationRadio">DisSatisfication</span>
                  </label>
                {/*</p>*/}
                        </div>
                    </div>
                </fieldset> 
                <div class="form-group row">
                    <div class="col-sm-2"><label className="col-form-label">Comments or suggestions</label></div>
                    <div class="col-sm-4 textAreaBox">
                    <div class="form-check">
                        <textarea class="form-check-input" name="comments" id="comments" onChange={this.handleChange} />
                        
                    </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-4">
                    
                    <Notification formValidate={this.state.formValidate} />
                    </div>
                </div>
            </form>
            <Footer />
        </div>
        </div>
    )
    }
}
export default Feedback;

/*

<div className="row container">
                    <div className="col-s-8">
                        <p>
                            <label>
                            <input name="group1" className="with-gap" type="radio"  />
                            <span>Excellent</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input name="group1" type="radio" className="with-gap" />
                            <span>Good</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input name="group1" type="radio" className="with-gap" />
                            <span>Average</span>
                            </label>
                        </p>
                        <p>
                            <label>
                            <input name="group1" type="radio" className="with-gap" />
                            <span>Dis satisfication</span>
                            </label>
                        </p>
                    </div>
                </div>

*/