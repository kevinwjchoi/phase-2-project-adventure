import App from "./components/App";
import Home from "./components/Home";
import AdventureList from "./components/AdventureList";
import About from "./components/About";

const routes = [
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
            }
        ]
    }
]

export default routes;