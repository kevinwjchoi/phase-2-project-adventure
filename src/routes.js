import App from "./components/App";
import Home from "./components/Home";
import AdventureList from "./components/AdventureList";
import About from "./components/About";
import RandomWinnerForm from "./components/RandomWinnerForm";

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
            },
            {
                path: '/randomwinnerform',
                element: <RandomWinnerForm />
            }
        ]
    }
]

export default routes;