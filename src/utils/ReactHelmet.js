import React from "react";
import { Helmet } from "react-helmet";

const ReactHelmet = ({ title, canonicalLink }) => {
    console.log('canonicalLink :>> ', canonicalLink);
    // Dynamically get the base URL
    const baseUrl =
        typeof window !== "undefined" ? window.location.origin : "https://winners-website-gk68.vercel.app/";
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title || 'The WiNNERS Institute'}</title>
            <link rel="canonical" href={`${baseUrl}${canonicalLink}`} />
        </Helmet>
    );
};

export default ReactHelmet;
