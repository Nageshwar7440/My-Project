import Layout from "./Components/CustomHooks/Layout";

const TermsAndConditions =()=>{
    return(
        <Layout>
            <div className="terms-container">
        <h1>Terms and Conditions</h1>

        <section id="buying">
            <h2>Buying a Home</h2>
            <ol>
                <li>The buyer agrees to purchase the property as-is unless otherwise specified.</li>
                <li>The seller guarantees clear ownership of the property.</li>
                <li>A deposit is required to secure the property, refundable upon successful completion of due diligence.</li>
                <li>Closing costs will be split equally between buyer and seller unless otherwise agreed.</li>
                <li>The property must pass inspection and meet all local codes and ordinances.</li>
            </ol>
        </section>

        <section id="selling">
            <h2>Selling a Home</h2>
            <ol>
                <li>The seller agrees to disclose any known defects or issues with the property.</li>
                <li>The seller is responsible for any repairs required by law before the sale is finalized.</li>
                <li>The seller must provide all necessary documentation regarding the property.</li>
                <li>The seller agrees to vacate the property by the agreed-upon date unless otherwise negotiated.</li>
                <li>The buyer’s deposit will be forfeited if the buyer withdraws from the sale without just cause.</li>
            </ol>
        </section>

        <section id="renting">
            <h2>Renting a Home</h2>
            <ol>
                <li>The tenant agrees to pay rent on time as specified in the rental agreement.</li>
                <li>The landlord is responsible for maintaining the property in a habitable condition.</li>
                <li>The tenant must keep the property clean and in good repair.</li>
                <li>The tenant is responsible for any damage caused by negligence.</li>
                <li>The rental agreement may be terminated with a 30-day notice by either party.</li>
            </ol>
        </section>
    </div>
        </Layout>
    );
}

export default TermsAndConditions;