import {Route, Routes} from 'react-router-dom';
import {useState} from "react";
import {authRoutes, publicRoutes} from "./Routes";
import {useSelector} from "react-redux";

const AppRouter = ({state}) => {
    return (
        <Routes>
            {
                 state && authRoutes.map(({path, element}) => (
                    <Route key={path} element={element} path={path}/>
                ))
            }
            {
                publicRoutes.map(({path, element}) => (
                    <Route key={path} element={element} path={path}/>
                ))
            }
        </Routes>
    )
}
export default AppRouter;