import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Baw from './pages/Baw/Baw'
import Contato from './pages/Contato/contato'
import Cadastro from './pages/Cadastro/cadastro'
import Lacoste from './pages/Lacoste/Lacoste'
import Login from './pages/Login/login'
import Produtos from './pages/Produtos/Produtos'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <Home /> }></Route>
                <Route path="/Baw" element={ <Baw /> }></Route>
                <Route path="/Contato" element={ <Contato /> }></Route>
                <Route path="/Cadastro" element={ <Cadastro /> }></Route>
                <Route path="/Lacoste" element={ <Lacoste /> }></Route>
                <Route path="/Login" element={ <Login /> }></Route>
                <Route path="/Produtos" element={ <Produtos /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;