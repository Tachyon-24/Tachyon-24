import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { useMerchandise } from "../../MerchandiseContext.js";
import "./merchandise.css";
import FrontImage from '../../assests/Front.png';
import BackImage from '../../assests/Back.png';

const images = [FrontImage, BackImage];


function Merchandise() {
    const navigate = useNavigate();
    const { product, selectedSize, updateSize, userInfo, updateUserInfo } = useMerchandise();

    const handleSizeChange = (e) => {
        updateSize(e.target.value);
    };

    const handleInputChange = (e) => {
        updateUserInfo({ [e.target.name]: e.target.value });
    };

    const handleCheckout = () => {
        navigate("/payment");
    };

    return (
        <div className="merchandise" >
            <h1>{product.name}</h1>
           
           <div className="merchimg">
           <Carousel>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
                    </Carousel.Item>
                ))}
            </Carousel>
           </div>
          
            <div>
                <h3>Select Size:</h3>
                <select value={selectedSize} onChange={handleSizeChange}>
                    <option value="">Select size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>

            <div>
                <h3>User Information:</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={userInfo.name}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                />
                <input
                    type="tel"
                    name="contact"
                    placeholder="Contact"
                    value={userInfo.contact}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={userInfo.location}
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={handleCheckout} disabled={!selectedSize || !userInfo.name || !userInfo.email || !userInfo.contact || !userInfo.location}>
                Proceed to Checkout
            </button>
        </div>
    );
}

export default Merchandise;
