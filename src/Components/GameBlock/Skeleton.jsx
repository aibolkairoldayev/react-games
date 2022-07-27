import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className="gameItem"
        speed={2}
        width={300}
        height={350}
        viewBox="0 0 300 350"
        backgroundColor="#287878"
        foregroundColor="#ecebeb"

    >
        <rect x="5" y="5" rx="10" ry="10" width="290" height="170" />
        <rect x="5" y="270" rx="10" ry="10" width="60" height="30" />
        <rect x="162" y="270" rx="10" ry="10" width="129" height="25" />
        <rect x="5" y="200" rx="10" ry="10" width="290" height="50" />
    </ContentLoader>
)

export default Skeleton