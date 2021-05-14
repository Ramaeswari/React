import React, { Component } from 'react';

class Search extends Component{
    constructor(){
        super();
        this.state= {
            filter: "",
            data: [
                {
                    country: "India",
                    capital: "New Delhi"
                },
                {
                    country: "Austrila",
                    capital: "hskdfh"
                },
                {
                    country: "Kanada",
                    capital: "husdkfjv,"
                },
                {
                    country: "Turkey",
                    capital: "uwedflkmc"
                },
            ]
        }
    }
    searchText = e =>{
        this.setState({ filter: e.target.value})
    }
    render(){
        let {filter, data} = this.state;
        let dataSearch = data.filter(item =>{
            return Object.keys(item).some(key =>
                item[key].toLowerCase().includes(filter.toLowerCase()))
        })
        return(
            <div>
            <input type="text" name="recipeName" 
            placeholder="search for your recipes.."
            className="input" value={filter}
            onChange={this.searchText}/>
            <table border="1">
                <tr>
                    <th>COuntry</th>
                    <th>Capital</th>
                </tr>
                {
                    dataSearch.map(item =>
                        <tr>
                            <td>{item.country}</td>
                            <td>{item.capital}</td>
                        </tr>)
                }
            </table>
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
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                    <label class="form-check-label" for="gridRadios3">
                        Average
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value="option4" />
                    <label class="form-check-label" for="gridRadios3">
                        DisSatisfication
                    </label>
                    </div>
                </div>
            </div>
        </fieldset>
        <p>
    <label>
      <input class="with-gap" name="group3" type="radio" checked />
      <span>Red</span>
    </label>
  </p>
        
  <div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>
            </div>
        )
    }
}
export default Search;