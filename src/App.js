import './App.css';
import { Media, Typography } from './components/atoms';
import { ThemeProvider } from 'styled-components';
import { Button, Menu } from './components/molecules';
import { useState } from 'react';
import { Home, Other } from './components/pages';


const theme = {
  light: {
    color: '#000000',
    background: '#FFFFFF',
  },
  dark: {
    color: '#FFFFFF',
    background: '#000000',
  },
};

function App() {

  const [userTheme, setUserTheme] = useState('light');

  return (
    <div className="App" style={{
      backgroundColor: userTheme === 'light' ? 'white' : 'black',
    }}>
      <ThemeProvider theme={theme[userTheme]}>
        <Button.Default onClick={() => {
          setUserTheme(userTheme === 'light' ? 'dark' : 'light');
        }}>
          Changer de theme
        </Button.Default>

        <Menu.Topbar pages={
          [
            <Home.Homepage />,
            <Other.CGU />,
          ]
        } />
      </ThemeProvider>
    </div>
  );
}

export default App;
