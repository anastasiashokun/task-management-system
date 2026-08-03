import { createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: { main: '#40916c' },
    secondary: { main: '#74c69d' },
    background: {
      default: '#d8f3dc',
      paper: '#ffffff',
    },
    text: {
      primary: '#1b4332',
      secondary: '#40916c',
    }
  },
  typography: {
    fontFamily: "'Josefin Sans', Arial, sans-serif",
  },
})
export default theme