import { Routes, Route } from 'react-router-dom';
import {Home} from "./home";
import {Admin} from "./admin";
import {Menu} from "./menu";
import {MenuDetails} from "./menu/details";

export const Content = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/burgers" element={<Menu />} />
        <Route path="/burgers/:id" element={<MenuDetails />} />
        <Route path="/admin" element={<Admin />} />
    </Routes>
}