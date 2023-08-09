import {createBrowserRouter} from "react-router-dom";
import Home from "./Home";
import MainLayout from "./layouts/MainLayout";
import SingIn from "./SingIn";
import Cities from "./Cities";
import CityDetail from "./CityDetail";
import NavLayout from "./layouts/NavLayout";
import NotFound from "./NotFound";

const router = createBrowserRouter([
   { 
        path: "/", 
        element: <MainLayout/>,
        children: [
            {path: "/", element: <Home />},
            {path: "/index", element: <Home />},
            {path: "/signin", element: <SingIn />},
            {path: "/cities", element: <Cities />},
            {path: "/citydetail", element: <CityDetail />},
            {path: "/city/:city_id/", element: <CityDetail />},
            {path: "/*", element: <NotFound />}
        ],
    }
   
])

export default router

