import Layout from "./Components/CustomHooks/Layout";

const Home = () => {
    return (
        <Layout>
            <div className="home_container">
                <div className="nav-text">
                    <i className="bi bi-house" style={{ fontSize: "40px" }}> </i>
                    <h3> <b>Real Estate Agency </b></h3>

                    <h1>Find Your Dream<br></br> House By Us</h1>
                    <p className='nav_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br></br> do eiusmod tempor incididunt ut labore.</p>
                    <button className='btn'>Make An Enquiry</button>

                </div>

                <img src='navbar_banner_1.png' alt='navbar_banner_1' style={{ width: "700px", height: "500px", }}></img><br></br>



            </div>

            <div className="home_container-1">

                <img src='navbar_banner_2.png' alt='navbar_banner_1' style={{ width: "700px", height: "500px", }}></img><br></br>
                <div className="nav-text">
                    <i className="bi bi-house" style={{ fontSize: "40px" }}> </i>
                    <h3> <b>Real Estate Agency </b></h3>

                    <h1>The Right Place of <br></br> House Finding</h1>
                    <p className='nav_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br></br> do eiusmod tempor incididunt ut labore.</p>
                    <button className='btn'>Make An Enquiry</button>



                </div>

            </div>


            <div className="home_container-3">
                <div className="row">
                    <div className="col">
                        <div className="counter-icon">

                            <img src='home_container-1-icon.gif' alt='icon.gif' style={{ width: "70px", height: "70px", }}></img><br></br>
                            <h1>
                                <section>
                                    <h6><span className="count-text">25+</span></h6>
                                </section>
                            </h1>
                            <h4>Total Area Sq</h4>

                        </div>
                    </div>


                    <div className="col">
                        <div className="counter-icon">

                            <img src='home_container-4-icon.gif' alt='icon.gif' style={{ width: "70px", height: "70px", }}></img><br></br>
                            <h1>
                                <section>
                                    <h6><span className="count-text">15+</span></h6>
                                </section>
                            </h1>
                            <h4>Apartment Sold</h4>

                        </div>
                    </div>


                    <div className="col">
                        <div className="counter-icon">

                            <img src='home_conatainer-2-icon.gif' alt='icon.gif' style={{ width: "70px", height: "70px", }}></img><br></br>
                            <h1>
                                <section>
                                    <h6><span className="count-text">15+</span></h6>
                                </section>
                            </h1>
                            <h4>Total Construction</h4>

                        </div>
                    </div>



                    <div className="col">
                        <div className="counter-icon">

                            <img src='home_container-3-icon.gif' alt='icon.gif' style={{ width: "70px", height: "70px", }}></img><br></br>
                            <h1>
                                <section>
                                    <h6><span className="count-text">15+</span></h6>
                                </section>
                            </h1>
                            <h4>Apart Ratio</h4>

                        </div>
                    </div>



                </div>
            </div>



            <div className="home_container-4">
                <div className="nav-text">
                    <h1>Today Sell Property</h1>
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio perferendis nam temporibus voluptatibus, laudantium incidunt, consequuntur rerum nostrum quis eos eveniet cum facilis eligendi libero suscipit recusandae magnam expedita nisi?</h4>

                    <ul className="list-item">
                        <li> Live Music Cocerts at Luviana</li>
                        <li>Our SecretIsland Boat Tour is Just for You</li>
                        <li>Live Music Cocerts at Luviana</li>
                        <li>Live Music Cocerts at Luviana</li>

                    </ul>

                    <div className="container-5">
                        <div className="row">
                            <div className="col">
                                <img src='about_sell_property-1.png' alt='navbar_banner_1' style={{ width: "150px", height: "150px", }}></img><br></br>

                                <h3>Bedrooms</h3>
                                /</div>

                            <div className="col">
                                <img src='about_sell_property-2.png' alt='navbar_banner_1' style={{ width: "150px", height: "150px", }}></img><br></br>
                                <h3>Car Parking</h3>
                            </div>


                            <div className="col">
                                <img src='about_sell_property-3.png' alt='navbar_banner_1' style={{ width: "150px", height: "150px", }}></img><br></br>
                                <h3>Balcony</h3>
                            </div>
                        </div>

                    </div>





                </div>

                <img src='property_banner_10.png' alt='navbar_banner_1' style={{ width: "700px", height: "500px", }}></img><br></br>



            </div>
        </Layout>
    )
}

export default Home;