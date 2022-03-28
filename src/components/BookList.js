import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className='book-list'
        style={{ background: theme.ui, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.bg }}>First Book</li>
          <li style={{ background: theme.bg }}>Second Book</li>
          <li style={{ background: theme.bg }}>Third Book</li>
        </ul>
      </div>
    );
  }
}

export default BookList;