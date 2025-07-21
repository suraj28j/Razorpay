import { useLocation } from "react-router-dom"
import "../assets/styles/PaymentSuccess.css"

const PaymentSuccess = () => {
    const query = new URLSearchParams(useLocation().search)
    const reference = query.get("reference")
    return (
        <div className="payment-success-container">
            <div className="payment-success-card">
                <h1 className="payment-success-title">Payment Successful</h1>
                <p className="payment-success-message">
                    Thankyou for your payment. Your transaction was successful
                </p>
                {
                    reference && (
                        <p className="payment-success-reference">
                            <strong>Reference ID : </strong>{reference}
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default PaymentSuccess
