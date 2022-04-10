import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>هذه الصفحة غير موجودة</h1>
            <Link to="/">الصفحة الرئيسية</Link>
        </div>
    );
};

export default NotFound;