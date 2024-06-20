import { useRouter } from "next/router";
import Layout from "./Components/CustomHooks/Layout";
import { property } from "@/data/property";
import { propertyWithCategory } from "@/data/property"

const Property = () => {


    const router = useRouter();


    return (
        <Layout>
            <div className="main-head">
                <div className="container-property-1">
                    <h2>Urban Area </h2>

                    <div className="row">

                        {
                            property.length > 0 && property.map((p: any) => {
                                return (
                                    <>
                                        <div className="col image_container" onClick={() => {
                                            router.push(`${p.id}/detail`)
                                        }}>


                                            <img src={p.image} alt="Property image" className="property-image " ></img>
                                            <h2>{p?.name}</h2>
                                            <div className="button-container">
                                                <button className="details-button">Details</button>
                                                <a href="/Cart"><button className="buy-Cart">Cart</button></a>


                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }




                    </div>


                </div>
            </div>


            {
                propertyWithCategory?.length > 0 && propertyWithCategory.map((p: any) => {
                    console.log(p)
                    return (
                        <>
                            < div className="main-head_2">

                                <div className="container-property"

                                >
                                    <h2>{p?.name}</h2>
                                    <div className="row">
                                        {
                                            p?.property?.length > 0 && p?.property?.map((product: any) => {
                                                return (
                                                    <>
                                                        <div className="col image_container" onClick={() => {
                                                            router.push(`${product.id}/detail`)
                                                        }}>
                                                            <img src={product?.image} alt="Property image" className="property-image " ></img>
                                                            <h2>{product?.name}</h2>
                                                            <div className="button-container">
                                                                <button className="details-button">Details</button>
                                                                <button className="buy-button">Buy</button>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })



                                        }

                                    </div>



                                </div>
                            </div>
                        </>
                    )
                })

            }


        </Layout >
    );
}

export default Property;