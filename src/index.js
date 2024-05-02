import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Home from './components/Home';
import AdventureList from './components/AdventureList';
import About from './components/About';
import AdventureForm from './components/AdventureForm';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/adventurelist',
                element: <AdventureList />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/adventureform',
                element: <AdventureForm />
            }
        ]
    }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  );

