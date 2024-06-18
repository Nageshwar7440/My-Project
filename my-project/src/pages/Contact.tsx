import Layout from "./Components/CustomHooks/Layout";

const Contact = () => {
    return (
        <Layout>
<div className="container-contact">
<div className="con-data">
                <h1>Contact Us <span>
                    <i className="bi bi-arrow-right"></i>
                    </span><a href="/">Home </a>
                    </h1>

<div className="row">
    <div className="col">
    <img src="background_banner-4.png" alt="background- image" className="background-image " style={{ height: "800px", width: "800px" }}></img>
    </div>


<div className="col">
           

                <div className="form">
                <form className="data-info"> 
                <h2>SEND US A MESSAGE</h2>
                    <label htmlFor="fname">Enter Your Name</label><br></br>
                    <input type="text" id="fname" name="fname" placeholder="Enter Your Name"></input><br></br>
                    <label htmlFor="number">Enter Your Number</label><br></br>
                    <input type="tel" id="number" name="number"></input><br></br>
                    <label htmlFor="email">Enter your email:</label><br></br>
                    <input type="email" id="email" name="email"></input><br></br>
                    <label htmlFor="text">Subject</label><br></br>
                    <input type="text" id="subject" name="subject" ></input><br></br>
                    <label htmlFor="textarea">Message</label><br></br>
                    <input type="text" id="Message" name="message" ></input><br></br>

                    <button type="submit">Submit</button>
                </form>
                </div>


                </div>
                </div>
            </div>
            </div>


            <div className="text-center">
                <div className="row">


                    <div className="col-4">
                        <img className="img-lcon" src="/contact_icon_1.png" alt="icon" height={"130px"} width={"130px"}></img>
                        <h1>Email Address</h1>
                        <a href="info@DreamHome.com" className="contact-link">info@DreamHome.com</a>
                        <a href="mailto:patidarn7440@gmail.com" className="contact-link">patidarn7440@gmail.com</a>
                    </div>


                    <div className="col-4">
                        <img className="img-lcon" src="/contact_icon_2.png" alt="icon" height={"110px"} width={"130px"}></img>
                        <h1>Phone Number</h1>
                        <a href="7440969796" className="contact-link"> 7440969796</a>
                        <a href="9826842056" className="contact-link">9826842056</a>
                    </div>


                    <div className="col-4">
                        <img className="img-lcon" src="/contact_icon_3.png" alt="icon" height={"110px"} width={"130px"}></img>
                        <h1>Office Address</h1>
                        <address>27/A Vikash Nagar, pratik nagar <br></br>JAIPUR, RAJASTHAN, 302012, INDIA</address>
                    </div>
                </div>
            </div>

            <div className="map">
                <iframe width="100%" height="600" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>



        </Layout>

    );
}

export default Contact;