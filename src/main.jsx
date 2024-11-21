import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/layout.jsx'
import { HomePage } from './pages/homePage.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element ={<Layout/>}>
        <Route path= '' element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>
)
