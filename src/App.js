import './App.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ToggleButton from './components/ToggleButton';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ToggleButton />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
