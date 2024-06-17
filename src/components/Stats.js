import React from 'react';
import "../styles/Style.css";

const Stats = () => {
    return (
        <div className="container text-center my-5">
            <div className="row" style={{backgroundColor: 'darkgray', borderRadius: '10px'}}>
                <div className="col-md-3">
                    <h2>10+</h2>
                    <p>Years On the Market</p>
                </div>
                <div className="col-md-3">
                    <h2>$12m</h2>
                    <p>Annual Revenue Growth</p>
                </div>
                <div className="col-md-3">
                    <h2>1600+</h2>
                    <p>Global Partners</p>
                </div>
                <div className="col-md-3">
                    <h2>10000+</h2>
                    <p>Daily Website Visits</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;