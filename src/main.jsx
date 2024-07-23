import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyle.jsx'
import './index.css'
import theme from './theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider  theme={theme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
