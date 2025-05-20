import './App.css';
import { Media, Typography } from './components/atoms';
import { ThemeProvider } from 'styled-components';
import { Button, Menu } from './components/molecules';
import { useEffect, useState } from 'react';
import { Home, Other, Todopage } from './components/pages';
import { NightModeProvider } from './context/NightModeContext';


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

  // useEffect(() => {
  //   #ComponentDidMount();
  //   return () => {
  //      #ComponentDidUnmount();
  //   }
  // }, [#ComponentUpdated()]);

  const [userTheme, setUserTheme] = useState('light');
  const [nightMode, setNightMode] = useState(false);

  return (
    <div className="App" style={{
      backgroundColor: userTheme === 'light' ? 'white' : 'black',
    }}>
      {/* A voir comment faire fonctionner */}
      <NightModeProvider value={{
        nightMode: nightMode,
        switchNightMode: () => setNightMode(!nightMode),
      }}></NightModeProvider>

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
            <Todopage />,
          ]
        } />
      </ThemeProvider>
    </div>
  );
}

export default App;
