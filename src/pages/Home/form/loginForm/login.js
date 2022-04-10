import React from 'react';
import { ErrorMessages,SuccessMessages } from '../../../../component/messages/messages';

function Login({errors,success,login,formValues,handelValues, whitchForm}) {
    return (
        <div id="login">
            <ErrorMessages errorMsg={errors}/>
            <SuccessMessages successMsg={success}/>
            <p className="form-guide">قم بإنشاء حساب أولاً وادخل لتسجيل لاجراء امتحاناتك</p>
            <form onSubmit={login}>
                <input name="seatNum" type="number" value={formValues.seatNum} onChange={handelValues} placeholder="اكتب رقم جلوسك"/>
                <input name="password" type="password" value={formValues.password} onChange={handelValues} placeholder="اكتب كلمة السر"/>
                <input type="submit" value="سجل الدخول"/>
                <button id="creatAccount" onClick={whitchForm}>إنشاء حساب</button>
            </form>
        </div>
    );
}

export default Login;