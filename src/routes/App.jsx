import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Login from '@pages/Login';
import RecoveryPassword from '@pages/RecoveryPassword';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import EditAccount from '@pages/EditAccount';
import MyOrder from '@pages/MyOrder';
import MyOrders from '@pages/MyOrders';

const App = () =>{
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/recovery-password' element={<RecoveryPassword />} />
                    <Route path='/edit-account' element={ <EditAccount /> } />
                    <Route path='/my-order' element={<MyOrder />} />
                    <Route path='/my-orders' element={<MyOrders />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}


export default App;