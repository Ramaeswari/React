import React, { Component } from 'react';

class FeedbackForm extends Component{
    render(){
        return(
            <div>
                <form>
                <fieldset class="form-group">
                <div class="row">
                    <legend class="col-form-label col-sm-2 pt-0"><label className="col-form-label">Rating</label></legend>
                    <div class="col-sm-10 radioBtns">
                        <div class="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"  />
                            <label class="form-check-label" for="gridRadios1">
                                Excellent
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label class="form-check-label" for="gridRadios2">
                                Good
                            </label>
                        </div>
                        <div class="form-check">
                        <input class="custom-control-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                        <label class="form-check-label" for="gridRadios3">
                            Average
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="custom-control-input" type="radio" name="gridRadios" id="gridRadios4" value="option4" />
                        <label class="form-check-label" for="gridRadios3">
                            DisSatisfication
                        </label>
                        </div>
                    </div>
                </div>
            </fieldset> 
                </form>
            </div>
        )
    }
}
export default FeedbackForm;