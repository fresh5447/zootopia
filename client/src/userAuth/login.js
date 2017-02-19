import React from 'react';
import $ from 'jquery';

var UserLogin = React.createClass({
  getInitialState: function() {
    return {
      email: null,
      password: null,
    }
  },
  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  },
  handleSubmit(){
    const User = {
      email: this.state.email,
      password: this.state.password
    };
    $.ajax({
      url: '/login',
      data: User,
      method: 'POST'
    }).done(function(d){
      console.log(d);
      if(d.local){
        alert("all logged in");
        window.location = "/#/";
      } else {
        alert(d.message)
      }
      // if(d.message){
      //   alert(d.message);
      //   window.location = "/#/login"
      // } else {
      //   alert("All logged in!!");
      //   window.location = "/#/";
      // }
    })
  },
  render: function() {
    var self = this;
    return (
      <div className="">
        <div className="page-header">
          <h2>User Login</h2>
        </div>
        <div className="">
          <form onSubmit={this.handleSubmit}>
            <fieldset className="form-group">
              <input required="true" onChange={function(event){ return self.onFieldChange('email', event.target.value) }}
                type="text" className="form-control" id="" placeholder="email"
              />
            </fieldset>
            <fieldset className="form-group">
              <input required="true" onChange={function(event){ return self.onFieldChange('password', event.target.value) }}
                type="password" className="form-control" id="" placeholder="password"
              />
            </fieldset>
            <button type="submit" className="btn btn-primary my-primary-btn">Login</button>
          </form>
        </div>
      </div>
    )
  }
})

export default UserLogin;
