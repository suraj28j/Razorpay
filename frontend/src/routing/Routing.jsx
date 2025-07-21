import { Route, Routes } from 'react-router-dom'
import Products from '../components/Products'
import PaymentSuccess from '../components/PaymentSuccess'

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/paymentsuccess' element={<PaymentSuccess />} />
        </Routes>
    )
}

export default Routing
