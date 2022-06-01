/* eslint-disable react/jsx-no-constructed-context-values */
import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import Loading from './components/Loading'
import ScrollToTop from './components/ScroolToTop'
import GlobalStyle from './styles/global'
import variables from './styles/themes/variables'
import 'react-toastify/dist/ReactToastify.min.css'

const Header = lazy(() => import('./components/Header'))
const Footer = lazy(() => import('./components/Footer'))
const Home = lazy(() => import('./pages/Home'))
const History = lazy(() => import('./pages/History'))
const About = lazy(() => import('./pages/About'))
const ListPokes = lazy(() => import('./pages/ListPokes'))
const Info = lazy(() => import('./pages/Info'))
const PokeNewList = lazy(() => import('./pages/PokeNewList'))
const PokeNewForm = lazy(() => import('./pages/PokeNewForm'))
const PokeNewEdit = lazy(() => import('./pages/PokeNewEdit'))
const PokeNewInfo = lazy(() => import('./pages/PokeNewInfo'))

function App() {
  return (
    <ThemeProvider theme={variables}>
      <Router>
        <ScrollToTop />
        <Suspense
          fallback={
            <div>
              <Loading />
            </div>
          }
        >
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/initial' element={<ListPokes />} />
            <Route path='/history' element={<History />} />
            <Route path='/about' element={<About />} />
            <Route path='/info/:name' element={<Info />} />
            <Route path='/list' element={<PokeNewList />} />
            <Route path='/new' element={<PokeNewForm />} />
            <Route path='/edit/:id' element={<PokeNewEdit />} />
            <Route path='/pokenew/:id' element={<PokeNewInfo />} />
          </Routes>
          <Footer />
        </Suspense>
        <ToastContainer />
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  )
}

export default App
