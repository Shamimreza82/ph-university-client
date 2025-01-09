import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/Register";


const router = createBrowserRouter([
    {
        path: '/', 
        element: <App/>, 
        children: [
            {
                path: 'about', 
                element: <About/>
            },
            {
                path: 'contact', 
                element: <Contact/>
            },
            {
                path: 'register', 
                element: <Register/>
            },
        ]
    },
    
])

export default router