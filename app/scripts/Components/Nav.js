//sections of flash cards
//html
//css
//javascript (accordion menu)
  //methods
  //functions
  //jquery
  //backbone
  //react
  //unit testing


  import React from 'react';
  import {Link} from 'react-router';

  const Nav = React.createClass({
    render: function () {
      return (
        <nav>
          <ul>
            <li><Link to="/html">HTML</Link></li>
            <li><Link to="/css">CSS</Link></li>
            <li><Link to="/js">JavaScript</Link></li>
          </ul>
        </nav>
      )
    }
  })

  export default Nav;
