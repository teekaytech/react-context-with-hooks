import './App.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ToggleButton from './components/ToggleButton';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ToggleButton />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
