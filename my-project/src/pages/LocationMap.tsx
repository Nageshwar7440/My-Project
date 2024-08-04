import React from 'react';
import Layout from "./Components/CustomHooks/Layout";

const LocationMap = () => {
    const divStyle: React.CSSProperties = {
        color: 'blue',
        textAlign: 'center', // Valid value
        padding: '20px',
        fontFamily: 'Arial',
        borderRadius: '5px',
        marginTop: '124px'
    };

    return (
        <Layout>
            <div className="locationMap" style={divStyle}>
                LocationMap
            </div>
            <div className="map">
                <iframe
                    width="100%"
                    height="600"
                    scrolling="no"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
            </div>
        </Layout>
    );
};

export default LocationMap;


