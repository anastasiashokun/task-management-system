

import {  ThemeProvider } from "@mui/material"
import theme from "./theme"
// import Footer from "./components/layout/Footer"
// import Header from "./components/layout/Header"
import { RouterProvider } from "react-router-dom"
import useRouter from "./hooks/routers/AppRoutes"

function App() {
  const Router = useRouter()
  return (
    <>  
        <ThemeProvider theme={theme}>
          <RouterProvider router={Router}/> 
        </ThemeProvider>

      
    </>
  )
}

export default App
