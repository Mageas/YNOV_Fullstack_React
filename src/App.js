import './App.css';
import { Media, Typography } from './components/atoms';
import { Subscribe } from './components/atoms/Button';
import { ThemeProvider } from 'styled-components';

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
  return (
    <div className="App">
      <ThemeProvider theme={theme.light}>
        <Typography.Title>
          Les folies de Patrick
        </Typography.Title>
        <Typography.Subtitle>
          Mon petit forum
        </Typography.Subtitle>
        <Typography.Link href='#'>
          Lien de Mon petit forum
        </Typography.Link>
        <Media.Image src='https://cdn.midjourney.com/824148b5-5310-493d-81f1-32ff342eeb86/0_1.png'></Media.Image>
        <Subscribe>Subscribe to my OnlyFan</Subscribe>
      </ThemeProvider>
    </div>
  );
}

export default App;
