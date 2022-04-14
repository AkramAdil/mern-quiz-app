import React from 'react';

const TopTable = ({topStudents}) => {
    return (
        <div className="top-table">
            <h2 className="table-name">أوئل الطلبة</h2>
            <table>
                <thead>    
                    <tr className="tabel-head">
                        <th>المركز</th>
                        <th>الاسم</th>
                        <th>الدرجة</th>
                    </tr>
                </thead>
                <tbody>
                    {topStudents?
                    topStudents.map((student,i)=>
                        <tr className="row" key={student.id}>
                            <td className="place">{i+1}</td>
                            <td className="userName">{student.name}</td>
                            <td className="userResult">{student.endResult}</td>
                        </tr>
                        ):
                        <tr className="row">
                            <td className="place">لجاري التحميل</td>
                            <td className="userName">جاري التحميل</td>
                            <td className="userResult">جاري التحميل</td>
                        </tr>
                        
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TopTable;