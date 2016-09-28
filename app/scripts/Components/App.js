import React from 'react';
import Nav from './Nav';

const App = React.createClass({
  render: function () {
    return (
      <div className="main-content">
        <Nav />
        {this.props.children}
      </div>
    )
  }
})

export default App;


//to do -
//build basic data --hardwire or pull from api?
//animate card "flipping" to reveal answer
//  -- show term
//  -- onClick > flip and show answer/ hide term
//implement "shuffle" feature so only ONE card at a time shows
//  -- use math.random to get random id from data?
