import React from 'react';
import Navbar from '../../component/navbar/navbar';
import "./style.css"
const HowWorks = () => {
    return (
        <>
            <Navbar/>
            <div class="container">
                <div class="how">
                    <h1>كيف تعمل منصة امتحانات الطلاب؟</h1>
                    <ol>
                        <li>إنشاء حساب برقم جلوس وبريد الكتروني و كلمة مرور واسمك.</li>
                        <li>الدخول الى الموقع باستخدام رقم الجلوس و كلمة المرور، اذا كنت تملك حساب مسبقا لا  تنشاء حساب.</li>
                        <li>البدء في إجابة امتحانك الذي تكونمن أسئلة احتيار متعدد و أسئلة صح و خطأ.</li>
                        <li>الضغط عل ارسال النتائج لمعرفت نتيجتك.</li>
                    </ol>
                </div>
            </div>
        </>
    );
};

export default HowWorks;