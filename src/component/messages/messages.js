import React from 'react';
import "./msg_style.css"
const ErrorMessages = ({errorMsg}) => {
    return (
        <>
           {errorMsg&&<div id="error"><i className="ri-close-circle-line ri-xl"></i><p>{errorMsg}</p></div>} 
        </>
    );
};

const SuccessMessages = ({successMsg}) => {
    return (
        <>
            {successMsg&&<div id="success"><i className="ri-checkbox-circle-line ri-xl"></i><p>{successMsg}</p></div>}
        </>
    );
};
export {ErrorMessages,SuccessMessages};