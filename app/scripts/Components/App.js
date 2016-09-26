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
