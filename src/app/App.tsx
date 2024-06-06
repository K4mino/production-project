import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { Suspense } from 'react';
import useTheme from './providers/ThemeProvider/lib/useTheme';
import classNames from '../shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
