import React from 'react';
import Logout from '../../component/logout/logout';

function InfoHeader({user}) {
    return (
        <div className="header">
            <div className="exam-info">
                <p>امتحان مادة: <span>الدراسات الاجتماعية</span></p>
                <p>رقم الجلوس: <span>{user?user.seatNum:"جاري التحميل"}</span></p>
                <p>اسم الطالب: <span>{user?user.name:"جاري التحميل"}</span></p>
            </div>
            <div className="otherInfo">
                <p>الوقت المتبقي: <span>60 دقيقية</span></p>
                <Logout/>
            </div>
        </div>
    );
}

export default InfoHeader;