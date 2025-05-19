import './App.css';
import { Media, Typography } from './components/atoms';
import { ThemeProvider } from 'styled-components';
import { Button } from './components/molecules';
import { useState } from 'react';


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
        <Typography.Title>
          Les folies de Patrick
        </Typography.Title>
        <Typography.Subtitle>
          Mon petit forum
        </Typography.Subtitle>
        <Typography.Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>
          Lien de Mon petit forum
        </Typography.Link>
        <Media.Image src='https://cdn.midjourney.com/824148b5-5310-493d-81f1-32ff342eeb86/0_1.png'></Media.Image>
        <Button.Switch>
          Button switch
        </Button.Switch>
        <Media.Video src='https://www.youtube.com/embed/z8N7BDUd-qg?mute=1'></Media.Video>
        {/* autoplay=1& */}
      </ThemeProvider>
    </div>
  );
}

export default App;
