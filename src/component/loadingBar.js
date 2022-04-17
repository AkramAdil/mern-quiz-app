import React from 'react';

const LoadingBar = () => {
    return (
        <div className="loadingbard" style={{width: "100%", height:"100%", textAlign: "center", display: "flex"}}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" style={{margin: "auto", shapeRendering: "auto"}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <rect x="15" y="30" width="10" height="40" fill="#ff2e63">
                <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.6"></animate>
                </rect><rect x="35" y="30" width="10" height="40" fill="#e4934b">
                <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.4"></animate>
                </rect><rect x="55" y="30" width="10" height="40" fill="#eaeaea">
                <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.2"></animate>
                </rect><rect x="75" y="30" width="10" height="40" fill="#08d9d6">
                <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-1"></animate>
                </rect>
            </svg>
        </div>
    );
};

export default LoadingBar;