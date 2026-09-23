import { BrowserRouter, Route, Routes } from 'react-router'
import Login from "./paginas/login"
import Home from "./paginas/Home"

export default function App (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )
}