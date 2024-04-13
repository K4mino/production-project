import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import './styles/index.scss'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { ThemeContext } from './theme/ThemeContect'
import useTheme from './theme/useTheme'
import classNames from './helpers/classNames/classNames'


export enum Theme{
  LIGHT = 'light',
  DARK = 'dark'
}
const App = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path='/' element={<MainPageAsync/>}/>
              <Route path='/about' element={<AboutPageAsync/>}/>
          </Routes>
        </Suspense>
    </div> 
  )
}

export default App