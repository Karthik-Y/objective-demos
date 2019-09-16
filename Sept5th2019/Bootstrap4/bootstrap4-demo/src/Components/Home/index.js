import React from "react";

/* Can't find bootstrap specific viewport height */
const divStyle = {
    height: '92vh', // deduct Nav bar height 80 pixel (i.e, 8)
    backgroundColor: '#33adff'
}

const Home = () => {
    return (
        <div className="container-fluid btn-primary" style={divStyle}>
            <h2> Bootstrap 4 </h2>
        </div>
    );
}

export default Home;
