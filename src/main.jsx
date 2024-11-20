import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Route, Routes } from "react-router-dom"
// default authenticate
import { AuthProvider } from './states/Auth.jsx'
// css
import './output.css'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-responsive-modal/styles.css';

// Layout
import Layout from "./components/Layout"
// Router Path Matching
import Home from './routes/home/page'
import Signin from './routes/signin/page'
import SignUp from './routes/signup/page'
import Item from './routes/item/page'
import GlobalChat from './routes/global/page'
import Setting from './routes/setting/page'
import Server from './routes/server/page'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/server' element={<Server />} />
              <Route path='/global' element={<GlobalChat />} />
              <Route path='/setting' element={<Setting />} />
            </Route>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<Signin />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </StrictMode>
)
