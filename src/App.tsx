import Routing from 'routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { AppProvider } from 'context/appContext';
import GlobalStyle from 'theme/globalStyle';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-KC9WRM8'
};

TagManager.initialize(tagManagerArgs)

function App() {
  return (
    <AppProvider>
    <Router>
        <GlobalStyle />
        <Routing/>
    </Router>
    </AppProvider>

  );
}

export default App;
