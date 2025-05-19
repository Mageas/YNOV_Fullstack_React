import './App.css';
import Bonjour from './components/molecules/Bonjour';
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
        <Bonjour>
        </Bonjour>
      </ThemeProvider>
    </div>
  );
}

export default App;
