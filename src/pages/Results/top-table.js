import React from 'react';

const TopTable = ({topStudents}) => {
    return (
        <div className="top-table">
            <h2 className="table-name">أوئل الطلبة</h2>
            <div className="tabel-head">
                <p>المركز</p>
                <p>الاسم</p>
                <p>الدرجة</p>
            </div>
            
            {topStudents?
            topStudents.map((student,i)=>
                <div className="row" key={student.id}>
                    <p>{i+1}</p>
                    <p>{student.name}</p>
                    <p>{student.endResult}</p>
                </div>
                ):"جاري تحميل أوائل الطلبة"
                
            }
        </div>
    );
};

export default TopTable;