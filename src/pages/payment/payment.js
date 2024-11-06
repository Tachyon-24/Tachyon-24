import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMerchandise } from "../../MerchandiseContext";
import "./payment.css"
function Payment() {
    const navigate = useNavigate();
    const { product, selectedSize, userInfo } = useMerchandise();
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    async function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        try {
            // Send dynamic data from product, selectedSize, and userInfo
            const orderData = {
                amount: product.price * 100, // Convert to smallest currency unit (e.g., INR paisa)
                currency: "INR", // You can dynamically set the currency if needed
                receipt: `receipt_${Date.now()}`, // Generate a unique receipt ID
            };

            const result = await axios.post("http://localhost:5000/payment/orders", orderData);

            if (!result) {
                alert("Server error. Are you online?");
                return;
            }

            const { amount, id: order_id, currency } = result.data;

            const options = {
                key: "rzp_live_x1qqJ1VcBegICm", // Your Razorpay key here
                amount: amount.toString(),
                currency: currency,
                name: "Tachyon",
                description: `Purchase of ${product.name} (${selectedSize})`,
                order_id: order_id,
                handler: async function (response) {
                    const data = {
                        orderCreationId: order_id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                        userInfo,
                        selectedSize,
                    };

                    try {
                        const verificationResponse = await axios.post("http://localhost:5000/payment/success", data);
                        if (verificationResponse.data.msg === "success") {
                            setPaymentSuccess(true);
                            navigate("/checkout"); // Redirect to Checkout only if payment is successful
                        } else {
                            alert("Payment verification failed. Please try again.");
                        }
                    } catch (error) {
                        alert("Payment verification failed. Please try again.");
                    }
                },
                prefill: {
                    name: userInfo.name,
                    email: userInfo.email,
                    contact: userInfo.contact,
                },
                notes: {
                    address: userInfo.location,
                },
                theme: {
                    color: "#61dafb", // Custom theme color
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            alert("Unable to initiate payment. Please try again.");
        }
    }

    return (
        <div className="payment">
            <h1>Confirm Your Purchase</h1>
            <p>{product.name} - Size: {selectedSize}</p>
            <p>Price: ₹{product.price}</p>
            <button onClick={displayRazorpay}>
                Pay ₹{product.price}
            </button>
        </div>
    );
}

export default Payment;