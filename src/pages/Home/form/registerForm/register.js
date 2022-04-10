import React from 'react';
import { ErrorMessages } from '../../../../component/messages/messages';

function Register({whitchForm,register,errors,formValues,handelValues}) {
    return (
        <div id="register">
            <p className="form-guide">أدخل بياناتك لإنشاء حساب خاص بك</p>
            <p id="haveAccount" onClick={whitchForm}>تملك حساب بالفعل؟ادخل</p>
            <ErrorMessages errorMsg={errors}/>
            <form method="POST" onSubmit={register}>
                <input type="text" name="name" placeholder="ما هو اسمك؟" onChange={handelValues} value={formValues.name}/>
                <input type="email" name="email" placeholder="اكتب بريد الكتروني" onChange={handelValues} value={formValues.email}/>
                <input type="number" name="seatNum" placeholder="اكتب رقم جلوسك" onChange={handelValues} value={formValues.seatNum}/>
                <input type="password" name="password" placeholder="أنشا كلمة سر خاصة بك" onChange={handelValues} value={formValues.password}/>
                <input type="submit" value="إنشاء حساب" />
            </form>
        </div>
    );
}

export default Register;