import "../assets/styles/Products.css"
import axios from 'axios'
import productData from "./data"

const Products = () => {
    const checkoutHandler = async (amount) => {
        const { data: keyData } = await axios.get("api/v1/getkey")
        const { key } = keyData
        // console.log(key);

        const { data: orderData } = await axios.post("api/v1/payment/process", {
            amount
        })
        const { order } = orderData
        // console.log(order);

        const options = {
            key,
            amount,
            currency: 'INR',
            name: 'Suraj Kumar',
            description: 'Razorpay Integration',
            order_id: order.id,
            callback_url: 'api/v1/paymentverification',
            prefill: {
                name: 'Mr. Kumar',
                email: 'kumar@example.com',
                contact: '7607304676'
            },
            theme: {
                color: '#F37254'
            },
        };

        const rzp = new Razorpay(options);
        rzp.open();

}
return (
    <div className='products-container'>
        {
            productData.map((product) => (
                <div className='product-card' key={product.id}>
                    <img src={product.image} alt={product.title} className="product-image" />
                    <h3 className={product.title}>Product Title</h3>
                    <p className="product-price">Price <strong>{product.Price}</strong> /-</p>
                    <button className="pay-button" onClick={() => checkoutHandler(product.Price)}>Pay ({product.Price})/-</button>
                </div>
            ))
        }
    </div>
)
}

export default Products
