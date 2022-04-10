import React from 'react';

const UserResult = ({userResult}) => {
    return (
        <div className="userResult">
            <p className="before_result">لقد اجبت على</p>
            <p className="finalResult"><span>{userResult?userResult.endResult:"نتيجة"}</span>/ 8</p>
        </div>
    );
};

export default UserResult;