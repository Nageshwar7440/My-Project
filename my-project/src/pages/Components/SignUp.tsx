// import { error } from "console";
// import { useState } from "react";
// import Layout from "./CustomHooks/Layout";

// const SignUp = () => {
//     const [signup, setsignup] = useState({
//         name: "",
//         lastname: "",
//         email: "",
//         password: "",
//         confirmpassword: ""
//     });

//     const [error, seterror] = useState({})

//     const handleupdatesignup = (e: any) => {
//         const name = e.target.name;
//         setsignup({
//             ...signup, [name]: e.target.value
//         });
//         //console.log(signup)
//     };

//     const handlesubmit = (e: any) => {
//         e.preventDefault();
//         const validationError = {};


//         if (!signup.name.trim()) {
//             validationError.name = "Enter a name";
//         }
//         if (!signup.lastname.trim()) {
//             validationError.lastname = "Enter a last name";
//         }

//         if (!signup.email.trim()) {
//             validationError.email = "Email is required";
//         } else if (!/^\S+@\S+\.\S+$/.test(signup.email)) {
//             validationError.email = "Email is not valid";
//         }

//         if (!signup.password.trim()) {
//             validationError.password = "Enter a password";
//         } else if (signup.password.length < 6) {
//             validationError.password = "Password should be at least 6 characters";
//         }

//         if (signup.confirmpassword !== signup.password) {
//             validationError.confirmpassword = "Passwords do not match";
//         }





//         seterror(validationError);
//         // Submit logic (if valid)
//         if (Object.keys(validationError).length === 0) {
//             // Perform your signup or API call here
//             console.log("Form submitted successfully!");
//         }
//     };

//     return (
//         <Layout>

//             <div className="signUp">
//                 <div className="sign-form">
//                     <h1>Sign-Up</h1>
//                     <form onSubmit={handlesubmit}>
//                         <div className="inputs-group">
//                             <div className="input-field">
//                                 <i className="bi bi-person-circle"></i>
//                                 <input type="text" placeholder="Enter Your Name" name="name" value={SignUp.name} onChange={handleupdatesignup} />
//                             </div>

//                             <span>{error.name}</span>

//                             <div className="input-field">
//                                 <i className="bi bi-person-circle"></i>
//                                 <input type="text" placeholder="Enter Your last name" name="lname" value={SignUp.lastname} onChange={handleupdatesignup} />
//                             </div>

//                             <span>{error.lastname}</span>


//                             <div className="input-field">
//                                 <i className="bi bi-envelope-at-fill"></i>
//                                 <input type="email" placeholder="email" name="email" value={SignUp.email} onChange={handleupdatesignup} />
//                             </div>
//                             <span>{error.email}</span>


//                             <div className="input-field">
//                                 <i className="bi bi-file-earmark-lock2"></i>
//                                 <input type="password" placeholder="password" name="password" value={SignUp.password} onChange={handleupdatesignup} />
//                             </div>
//                             <span>{error.password}</span>

//                             <div className="input-field">
//                                 <i className="bi bi-file-earmark-lock2"></i>
//                                 <input type="confirmpassword" placeholder="confirmpassword" name="confirmpassword" value={SignUp.confirmpassword} onChange={handleupdatesignup} />
//                             </div>
//                             <span>{error.confirmpassword}</span>

//                         </div>
//                         <button type="submit" className="btn">SUBMIT</button>

//                     </form>
//                     <p className="instruction"> By clicking the signUp button you agree to <br></br> our <a href="#">policy privacy</a>
//                     </p>

//                     <p className="bottom-instruction"> Already have an account?<a href="/Login">Loginhere</a></p>
//                 </div>
//             </div>
//         </Layout>
//     )
// }

// export default SignUp;


import React, { useState } from "react";
import Layout from "./CustomHooks/Layout";

const SignUp = () => {
    const [signup, setsignup] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: ""
    });

    const [error, seterror] = useState({});

    const handleupdatesignup = (e) => {
        const name = e.target.name;
        setsignup({
            ...signup,
            [name]: e.target.value
        });
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        const validationError = {};

        if (!signup.name.trim()) {
            validationError.name = "Enter a name";
        }
        if (!signup.lastname.trim()) {
            validationError.lastname = "Enter a last name";
        }

        if (!signup.email.trim()) {
            validationError.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(signup.email)) {
            validationError.email = "Email is not valid";
        }

        if (!signup.password.trim()) {
            validationError.password = "Enter a password";
        } else if (signup.password.length < 6) {
            validationError.password = "Password should be at least 6 characters";
        }

        if (signup.confirmpassword !== signup.password) {
            validationError.confirmpassword = "Passwords do not match";
        }

        seterror(validationError);

        // Submit logic (if valid)
        if (Object.keys(validationError).length === 0) {
            // Perform your signup or API call here
            console.log("Form submitted successfully!");
        }
    };

    return (
        <Layout>
            <div className="signUp">
                <div className="sign-form">
                    <h1>Sign-Up</h1>
                    <form onSubmit={handlesubmit}>
                        <div className="inputs-group">
                            <div className="input-field">
                                <i className="bi bi-person-circle"></i>
                                <input type="text" placeholder="Enter Your Name" name="name" value={signup.name} onChange={handleupdatesignup} />
                            </div>
                            <span>{error.name}</span>

                            <div className="input-field">
                                <i className="bi bi-person-circle"></i>
                                <input type="text" placeholder="Enter Your last name" name="lastname" value={signup.lastname} onChange={handleupdatesignup} />
                            </div>
                            <span>{error.lastname}</span>

                            <div className="input-field">
                                <i className="bi bi-envelope-at-fill"></i>
                                <input type="email" placeholder="Email" name="email" value={signup.email} onChange={handleupdatesignup} />
                            </div>
                            <span>{error.email}</span>

                            <div className="input-field">
                                <i className="bi bi-file-earmark-lock2"></i>
                                <input type="password" placeholder="Password" name="password" value={signup.password} onChange={handleupdatesignup} />
                            </div>
                            <span>{error.password}</span>

                            <div className="input-field">
                                <i className="bi bi-file-earmark-lock2"></i>
                                <input type="password" placeholder="Confirm Password" name="confirmpassword" value={signup.confirmpassword} onChange={handleupdatesignup} />
                            </div>
                            <span>{error.confirmpassword}</span>
                        </div>
                        <button type="submit" className="btn">SUBMIT</button>
                    </form>
                    <p className="instruction"> By clicking the signUp button you agree to <br></br> our <a href="#">policy privacy</a> </p>
                    <p className="bottom-instruction"> Already have an account?<a href="/Login">Login here</a></p>
                </div>
            </div>
        </Layout>
    );
};

export default SignUp;
