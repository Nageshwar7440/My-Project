import { useRouter } from "next/router";
import Layout from "../Components/CustomHooks/Layout";
import { use, useEffect, useState } from "react";
import { property } from "@/data/property";


const Services = () => {
    const router = useRouter()

    const { id } = router.query;
    let [data, setData] = useState()



    useEffect(() => {
        if (!router?.isReady) return

        const res = property.find((f: any) => f.id == id) as any
        console.log(res);
        setData(res)
    }, [id])

    return (
        <>
            <Layout>
                <div className="Property_layout">
                    <div><img src={'/' + data?.image} alt="Property image" className="top-image "></img></div>

                    {/* 
                    <i className="bi bi-geo-alt"> <span> Belmont Gardens, Chicago</span></i> */}

                    <div className="card_container">
                        <div className="row">
                            <div className="col-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={'/' + data?.image1} className="card-img-top" alt="Card image"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Living Room</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={'/' + data?.image2} className="card-img-top" alt="Card image"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Kitchen</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>


                            <div className="col-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={'/' + data?.image3} className="card-img-top" alt="Card image"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">WashRoom</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={'/' + data?.image4} className="card-img-top" alt="Card image"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Bedroom</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>





                        </div>
                    </div>

                    <div className="container-detail">
                        <h3>Property Detail</h3>
                        <div className="row">
                            <div className="col-4">

                                <p>Property ID:      {data?.id}</p>
                                <p>Home Area:        {data?.size}sqft</p>
                                <p>Rooms:            {data?.Rooms}</p>
                                <p>Baths:            {data?.Baths}</p>
                                <p>Year built:       {data?.Year_built}</p>

                            </div>


                            <div className="col-8">

                                <p>Lot Area:             {data?.id}</p>
                                <p>Lot dimensions:        {data?.size}sqft</p>
                                <p>Beds:                {data?.Beds}</p>
                                <p>Price:                {data?.price}</p>
                                <p>Property Status:      {data?.Property_Status}</p>

                            </div>
                        </div>
                    </div>


                </div>






            </Layout>
        </>
    );
}

export default Services;