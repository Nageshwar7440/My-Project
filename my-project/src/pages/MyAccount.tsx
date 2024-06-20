import Layout from "./Components/CustomHooks/Layout";

const MyAccount = () => {
    return (
        <Layout>
            <div className="section_title-area">
                <h2>Sign In <br></br> To Your Account</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br>Sit aliquid, Non distinctio vel iste.</p>
            </div>

            <div className="login-container">
                <div className="row">
                    <div className="col">
                        <div className="account-login-inner">
                            <form action={"#"}>
                                <input type="text" name="email" placeholder="Email*"></input>
                                <input type="password" name="password" placeholder="Password*"></input>
                                <div className="btn-wrapper mt-0">
                                    <button className="theme-btn-1 btn btn-block" type="submit">SIGN IN</button>
                                </div>
                            </form>
                            <div className="go-to-btn mt-20">
                                <button><small>FORGOTTEN YOUR PASSWORD?</small></button>
                            </div>


                        </div>
                    </div>

                    <div className="col ">
                        <div className="account-login-inner">
                            <h4>DON'T HAVE AN ACCOUNT?</h4>
                            <p>Add items to your wishlistget personalised recommendations<br></br>
                                check out more quickly track your orders register</p>
                            {/* 
                            <button className="theme-btn-1 btn btn-block" type="submit">CREATE ACCOUNT</button> */}
                            <a href="/SignUp">
                                <button className="theme-btn-1 btn btn-block" type="submit">CREATE ACCOUNT</button>
                            </a>



                        </div>

                    </div>
                </div>


            </div>
        </Layout>
    );
}


export default MyAccount;