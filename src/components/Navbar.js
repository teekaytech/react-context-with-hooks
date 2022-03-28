import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  render() {
    return(
      <ThemeContext.Consumer>{(context) => {
        const { isLightTheme, light, dark } = context
        const theme = isLightTheme ? light : dark
          return (
            <nav style={{background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          )
      }}</ThemeContext.Consumer>
      /*
      Can be used with functional component, static cannot.
      Can also be used to consume multiple contexts
      */
    );
  }
}

export default Navbar;