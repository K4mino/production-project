import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/index.scss'
import useTheme from './providers/ThemeProvider/lib/useTheme'
import classNames from '../shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

export enum Theme{
  LIGHT = 'light',
  DARK = 'dark'
}

const App = () => {
  const {theme} = useTheme();


  return (
    <div className={classNames('app', {}, [theme])}>
        <Suspense fallback=''>
        <Navbar/>
        <div className='content-page'>
          <Sidebar/>
          <AppRouter/>
        </div>
        </Suspense>
    </div> 
  )
}

export default App