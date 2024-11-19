import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './componentes/layout/layout.jsx'
import { HomePage } from './pages/homePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element ={<Layout/>}>
        <Route path= '' element={<HomePage/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
