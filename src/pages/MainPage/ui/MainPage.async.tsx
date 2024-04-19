import { lazy } from 'react'

export const MainPageAsync:React.LazyExoticComponent<React.FC> = lazy(() => import('./MainPage'))