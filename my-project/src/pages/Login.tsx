
import Layout from "./Components/CustomHooks/Layout";
import React from "react";

const Login = () => {
    return (

        <Layout>

            <div className="register">
                <div className="login-form">
                    <h1>Log-in</h1>

                    <form>
                        <div className="inputs-groups">
                            <div className="inputs-field">
                                <i className="bi bi-envelope-at-fill"></i>
                                <input type="Email" placeholder="Enter Your Email" />
                            </div>

                            <div className="inputs-field">
                                <i className="bi bi-file-earmark-lock2"></i>
                                <input type="Password" placeholder="Enter Your Password" />
                            </div>
                            <button className="btn">Submit</button>
                        </div>
                    </form>
                    <p className="instruction"> Not have an account <a href="/SignUp">Sign-up</a></p>
                </div>
            </div>
        </Layout>


    )
};

export default Login;



