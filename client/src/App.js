import React from 'react';
import NavBar from './Navigation';
import $ from 'jquery';

var App = React.createClass({
  getInitialState: function() {
    return {
      user: null
    }
  },
  loadUser: function(){
    var self = this;
    $.ajax({
      url: '/getCurrentUser',
      method: 'GET'
    }).done(function(d) {
      self.setState({ user: d })
    })
  },
  componentWillMount(){
    this.loadUser();
  },
  render: function() {
    return (
      <div>
        <NavBar user={this.state.user}/>
        { this.props.children }
      </div>
    )
  }
})

export default App;
