import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import './styles/index.scss'
import { AboutPage } from 'pages/AboutPage/'
import { MainPage } from 'pages/MainPage'
import useTheme from './providers/ThemeProvider/lib/useTheme'
import classNames from '../shared/lib/classNames/classNames'


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
              <Route path='/' element={<MainPage/>}/>
              <Route path='/about' element={<AboutPage/>}/>
          </Routes>
        </Suspense>
    </div> 
  )
}

export default App