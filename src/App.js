import './App.css';
import { NightModeProvider } from './context/NightModeContext';
import Bonjour from './components/molecules/Bonjour';

function App() {
  return (
    <div className="App">
   {/* ThemeProvider theme={nightTheme}> */}
      <NightModeProvider value={{
        nightMode: "false",
        getNightMode: () => {
          return "night";
        }
      }}>
        <Bonjour>
        </Bonjour>
      </NightModeProvider>
    </div>
  );
}

export default App;
