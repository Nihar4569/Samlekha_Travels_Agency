import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import '../Styles/style.css'; // Adjust this path based on your project structure
import { app } from "../firebase";
import { setDoc, doc, getFirestore } from 'firebase/firestore';
import toast, { Toaster } from 'react-hot-toast';

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pickup, setPickup] = useState("");
    const [drop, setDrop] = useState("");
    const [departureDate, setDepartureDate] = useState("");

    const db = getFirestore(app);

    const register = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            await setDoc(doc(db, 'clients', name+" "+phone), {
                name,
                email,
                phone,
                pickup,
                drop,
                departure: departureDate,
            });
            toast.success("Submitted");
        } catch (error) {
            toast.error(error.message);
        }
    };

    const validateForm = () => {
        if (phone.length < 10) {
            toast.error("Phone number must be at least 10 digits!");
            return false;
        } else if (isNaN(phone)) {
            toast.error("Phone number should not include characters!");
            return false;
        }
        return true;
    };

    return (
        <div>
            <Toaster />
            <nav>
                <img src="/files/logo.png" className="logo" alt="Logo" title="Samlekha Travels" />
                <ul className="navbar">
                    <li>
                        <Link to="/">Home</Link>
                        <a href="/#locations">Locations</a>
                        <a href="/#package">Packages</a>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact Us</Link>
                        <a href="tel:6370662019">Call Now</a>
                    </li>
                </ul>
            </nav>

            <section className="registration">
                <div className="register-form">
                    <h1>Book Here</h1>
                    <form onSubmit={register}>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Name" id="name" required />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email-Id" id="email" required />
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" placeholder="Phone No." id="phonenum" required />
                        <input value={pickup} onChange={(e) => setPickup(e.target.value)} type="text" name="pickup" placeholder="Pickup" id="pickup" required />
                        <input value={drop} onChange={(e) => setDrop(e.target.value)} type="text" name="drop" placeholder="Drop" id="drop" required />
                        <h4>Departure</h4>
                        <input value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} type="date" name="departureDate" id="departureDate" required />
                        <button type="submit" className="submitbtn">Submit</button>
                    </form>
                </div>
            </section>

            <section className="footer">
                <div className="foot">
                    <div className="footer-content">
                        <div className="footlinks">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="footlinks">
                            <h4>Connect</h4>
                            <div className="social">
                                <a href="https://www.facebook.com/mohd.rahil.blogger" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a>
                                <a href="https://www.instagram.com/mohdrahil101" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
                                <a href="https://www.twitter.com/mohdrahil101" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter'></i></a>
                                <a href="https://www.linkedin.com/in/mohdrahil101" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
                                <a href="https://www.youtube.com/techdollarz" target="_blank" rel="noopener noreferrer"><i className='bx bxl-youtube'></i></a>
                                <a href="https://www.mohdrahil.wordpress.com" target="_blank" rel="noopener noreferrer"><i className='bx bxl-wordpress'></i></a>
                                <a href="https://www.github.com/mohdrahil101" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="end">
                    <p>Copyright © 2022 Samlekha Travels All Rights Reserved.<br /></p>
                </div>
            </section>
        </div>
    );
}
