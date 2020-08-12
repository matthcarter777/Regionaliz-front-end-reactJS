import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index';
import SignIn from './pages/SigIn';
import GlobalStyles from './styles/global';

import ToastContainer from './components/ToastContainer';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyles />
  </>
);

export default App;
