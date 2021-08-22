import React from 'react'
import ReactDOM from 'react-dom'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import App from './App'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#cccccc',
    }
  },
})


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)


