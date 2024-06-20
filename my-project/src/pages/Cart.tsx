// import React, { useState } from 'react';
// import Layout from './Components/CustomHooks/Layout'; // Adjust the path as per your project structure

// const Cart = () => {
//     const [cartItems, setCartItems] = useState([]);


//     // Function to add item to the cart
//     const addItemToCart = (item) => {
//         setCartItems([...cartItems, item]);
//     };

//     return (
//         <Layout>
//             <div style={{ marginTop: "124px" }}>
//                 <h2>Cart</h2>
//                 <ul>
//                     {cartItems.map((item, index) => (
//                         <li key={index}>{item.name}</li>
//                     ))}
//                 </ul>

//                 <button onClick={() => addItemToCart({ name: 'Product A' })}>
//                     Add Product A to Cart
//                 </button>
//             </div>
//         </Layout>

//     );
// };


// export default Cart;
