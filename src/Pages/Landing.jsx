import React from 'react';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import '../Styles/style.css';

const Landing = () => {
    return (
        <div>
            {/* Background Video & Header */}
            <div className="banner">
                <video src="/files/bgvid.mp4" type="video/mp4" autoPlay muted loop></video>
                
                {/* Header */}
                <div className="content" id="home">
                    <nav>
                        <img src="/files/logo.png" className="logo" alt="Logo" title="Samlekha Travels" />
                        <ul className="navbar">
                            <li>
                                <a href="#home">Home</a>
                                <a href="#locations">Locations</a>
                                <a href="#package">Packages</a>
                                <Link to="/about">About Us</Link>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="title">
                        <h1>SAMLEKHA TRAVELS</h1>
                        <p>Plan your trip with us and travel around the world with the most affordable packages!</p>
                        <Link to="/register" className="button">Book Now!</Link>
                    </div>
                </div>
            </div>

            {/* Services */}
            <section className="container">
                <div className="text">
                    <h2>We have the best services available for you!</h2>
                </div>
                <div className="rowitems">
                    {[
                        { img: '1a.jpg', title: 'Flight Services', description: 'Arrival and Departure' },
                        { img: '2a.jpg', title: 'Cab Services', description: 'Book and go' },
                        { img: '3a.jpg', title: 'Travel Services', description: 'Pick-up/drop' },
                        { img: '4a.jpg', title: 'Hotel Services', description: 'Check-in/out' }
                    ].map((service, index) => (
                        <div className="container-box" key={index}>
                            <div className="container-image">
                                <img src={`/files/${service.img}`} alt={service.title} />
                            </div>
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Locations */}
            <section className="locations" id="locations">
                <div className="package-title">
                    <h2>Locations</h2>
                </div>
                <div className="location-content">
                    {[
                        { img: 'l1.jpg', country: 'India', city: 'Kashmir', link: '#kashmir' },
                        { img: 'l2.jpg', country: 'Turkey', city: 'Istanbul', link: '#istanbul' },
                        { img: 'l3.jpg', country: 'France', city: 'Paris', link: '#paris' },
                        { img: 'l4.jpg', country: 'Indonesia', city: 'Bali', link: '#bali' },
                        { img: 'l5.jpg', country: 'United Arab Emirates', city: 'Dubai', link: '#dubai' },
                        { img: 'l6.jpg', country: 'Switzerland', city: 'Geneva', link: '#geneva' },
                        { img: 'l7.jpg', country: 'Andaman & Nicobar', city: 'Port Blair', link: '#port-blair' },
                        { img: 'l8.jpg', country: 'Italy', city: 'Rome', link: '#rome' }
                    ].map((location, index) => (
                        <a href={`./locations.html${location.link}`} target="_blank" rel="noopener noreferrer" key={index}>
                            <div className="col-content">
                                <img src={`/files/${location.img}`} alt={location.city} />
                                <h5>{location.country}</h5>
                                <p>{location.city}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Packages */}
            <section className="package" id="package">
                <div className="package-title">
                    <h2>Packages</h2>
                </div>
                <div className="package-content">
                    {[
                        { img: 'p1.jpg', price: 'Rs.9,999/-', name: 'Bronze', details: ['2 Star Hotel', '5 Nights Stay', 'Free photo Session', 'Friendly Tour Guide', '24/7 Customer Help Center'] },
                        { img: 'p2.jpg', price: 'Rs.19,999/-', name: 'Silver', details: ['3 Star Hotel', '7 Nights Stay', 'Free photo Session', 'Friendly Tour Guide', '24/7 Customer Help Center'] },
                        { img: 'p3.jpg', price: 'Rs.29,999/-', name: 'Gold', details: ['4 Star Hotel', '10 Nights Stay', 'Breakfast and Dinner', 'Free photo Session', 'Friendly Tour Guide', '24/7 Customer Help Center'] },
                        { img: 'p4.jpg', price: 'Rs.39,999/-', name: 'Platinum', details: ['5 Star Hotel', '14 Nights Stay', 'Breakfast, Lunch and Dinner', 'Bonfire', 'Free photo Session', 'Friendly Tour Guide', '24/7 Customer Help Center'] }
                    ].map((pkg, index) => (
                        <div className="box" key={index}>
                            <div className="image">
                                <img src={`/files/${pkg.img}`} alt={pkg.name} />
                                <h3>{pkg.price}</h3>
                            </div>
                            <div className="dest-content">
                                <div className="location">
                                    <h4>{pkg.name}</h4>
                                    <ul className="pac-details">
                                        {pkg.details.map((detail, i) => <li key={i}>{detail}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section className="newsletter">
                <div className="newstext">
                    <h2>Newsletter</h2>
                    <p>Subscribe to get offers and latest<br />updates every week!</p>
                </div>
                <div className="send">
                    <form action="">
                        <input type="email" name="emailid" placeholder="E-mail" required />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>
            </section>

            {/* Footer */}
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

export default Landing;
