import Routing from 'routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { AppProvider } from 'context/appContext';

function App() {
  return (
    <AppProvider>
    <Router>
        <Routing/>
    </Router>
    </AppProvider>

  );
}

export default App;
