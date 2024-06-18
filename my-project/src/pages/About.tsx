import Layout from "./Components/CustomHooks/Layout";

const About = () => {
    return (
        <>
            <Layout>
                <div className="about-container">
                    <figure className="banner">
                        <img src="about_banner_1.png" alt="house-interior" style={{ height: "600px", width: "600px" }}></img>

                    </figure>
                    <div className="about-content">
                        <h1 className="about-subtitle" style={{ color: "red" }}> About us</h1>
                        <h2 className="about-title">The Leading Real Estate Rental Marketplace.</h2>
                        <p className="about-text" style={{ paddingTop: "11px" }}>Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services</p>
                        <ul className="about-list">
                            <li className="about-item">
                                <i className="bi bi-house" style={{ fontSize: "50px" }}></i>
                                <p className="about-item-text">Smart Home Design</p>
                            </li>

                            <li className="about-item">
                                <i className="bi bi-droplet-fill" style={{ fontSize: "50px" }}></i>
                                <p className="about-item-text">Beautiful Scene Around</p>
                            </li>

                            <li className="about-item">
                                <i className="bi bi-award-fill" style={{ fontSize: "50px" }}></i>
                                <p className="about-item-text">Exceptional Lifestyle</p>
                            </li>

                            <li className="about-item">
                                <i className="bi bi-shield-check" style={{ fontSize: "50px" }}></i>
                                <p className="about-item-text">Complete 24/7 Security   </p>
                            </li>

                        </ul>

                    </div>
                    </div>


                    {/* SERVICES */}


            

                <div className="services-container">
                        <h3>Our Services</h3>
                        <h2>Our Main Focus  </h2>
                            <div className="row">
                                <div className="col">
                                    <div className="services-detail">
                                    <img src="Buy_home.png" alt="Buy-home" width={'400PX'} height={"400px"}></img>
                                    <h3>Buy a home</h3>
                                    <p>Over 15+ homes for sale available on the web-<br></br>site, we can match you with a house you will want to <br></br>call home.</p>
                                    <a href="Property"> Find a home<i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="services-detail">
                                    <img src="Rent_home.png" alt="Buy-home" width={'400PX'} height={"400px"}></img>
                                    <h3>Buy a home</h3>
                                    <p>Over 15+ homes for sale available on the web-<br></br>site, we can match you with a house you will want to <br></br>call home.</p>
                                    <a href="Property"> Find a home<i className="bi bi-arrow-right"></i></a>
                                    </div>
                                    
                                </div>


                                <div className="col">
                                    <div className="services-detail">
                                    <img src="Sale_home.png" alt="Buy-home" width={'400PX'} height={"400px"}></img>
                                    <h3>Buy a home</h3>
                                    <p>Over 15+ homes for sale available on the web-<br></br>site, we can match you with a house you will want to <br></br>call home.</p>
                                    <a href="Property"> Find a home<i className="bi bi-arrow-right"></i></a>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    



            </Layout>
        </>
    )
}

export default About;