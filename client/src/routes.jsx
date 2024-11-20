// src/routes.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Baw from './pages/Baw/Baw';
import Contato from './pages/Contato/contato';
import Cadastro from './pages/Cadastro/cadastro';
import Lacoste from './pages/Lacoste/Lacoste';
import Login from './pages/Login/login';
import Produtos from './pages/Produtos/Produtos';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Perfil/Profile';
import Admin from './pages/Admin/Admin';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/baw" element={ <Baw /> }></Route>
                <Route path="/contato" element={ <Contato /> }></Route>
                <Route path="/register" element={ <Cadastro /> }></Route>
                <Route path="/lacoste" element={ <Lacoste /> }></Route>
                <Route path="/login" element={ <Login /> }></Route>
                <Route path="/produtos" element={ <Produtos /> }></Route>

                {/* Rotas protegidas */}
                <Route element={<PrivateRoute roles={['user', 'admin']} />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>

                <Route element={<PrivateRoute roles={['admin']} />}>
                    <Route path="/admin" element={<Admin />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;