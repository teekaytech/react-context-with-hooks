import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className='book-list'
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        <li style={{ background: theme.ui }}>First Book</li>
        <li style={{ background: theme.ui }}>Second Book</li>
        <li style={{ background: theme.ui }}>Third Book</li>
      </ul>
    </div>
  );
}

export default BookList;